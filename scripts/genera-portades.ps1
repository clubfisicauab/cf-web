<#
  Genera la imatge de portada (portada.png) de cada paperillo a partir de la primera pàgina del seu paper.pdf.
  Fa servir el lector de PDF que porta Windows 10/11: no cal instal·lar res.

  Ús (des de la carpeta del repositori):
    powershell -ExecutionPolicy Bypass -File scripts/genera-portades.ps1          # només les que falten o estan desactualitzades
    powershell -ExecutionPolicy Bypass -File scripts/genera-portades.ps1 -Totes   # les torna a generar totes

  A GitHub Actions les portades que falten es generen automàticament amb pdftoppm (vegeu .github/workflows/hugo.yml).
#>
param([switch]$Totes)

$ErrorActionPreference = "Stop"
$arrel = Split-Path -Parent $PSScriptRoot
$paperillos = Join-Path $arrel "content\paperillos"

Add-Type -AssemblyName System.Runtime.WindowsRuntime
$null = [Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime]
$null = [Windows.Storage.StorageFolder, Windows.Storage, ContentType = WindowsRuntime]
$null = [Windows.Storage.CreationCollisionOption, Windows.Storage, ContentType = WindowsRuntime]
$null = [Windows.Storage.FileAccessMode, Windows.Storage, ContentType = WindowsRuntime]
$null = [Windows.Storage.Streams.IRandomAccessStream, Windows.Storage.Streams, ContentType = WindowsRuntime]
$null = [Windows.Data.Pdf.PdfDocument, Windows.Data.Pdf, ContentType = WindowsRuntime]
$null = [Windows.Data.Pdf.PdfPageRenderOptions, Windows.Data.Pdf, ContentType = WindowsRuntime]

$metodes = [System.WindowsRuntimeSystemExtensions].GetMethods()
$asTaskOperacio = $metodes | Where-Object { $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1' } | Select-Object -First 1
$asTaskAccio = $metodes | Where-Object { $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncAction' } | Select-Object -First 1

function Espera($operacio, [Type]$tipus) {
  $tasca = $asTaskOperacio.MakeGenericMethod($tipus).Invoke($null, @($operacio))
  $tasca.Wait() | Out-Null
  $tasca.Result
}

function EsperaAccio($accio) {
  $tasca = $asTaskAccio.Invoke($null, @($accio))
  $tasca.Wait() | Out-Null
}

$generades = 0
foreach ($carpeta in Get-ChildItem $paperillos -Directory) {
  $pdf = Join-Path $carpeta.FullName "paper.pdf"
  $portada = Join-Path $carpeta.FullName "portada.png"
  if (-not (Test-Path $pdf)) { continue }
  if (-not $Totes -and (Test-Path $portada) -and ((Get-Item $portada).LastWriteTime -ge (Get-Item $pdf).LastWriteTime)) { continue }

  $fitxer = Espera ([Windows.Storage.StorageFile]::GetFileFromPathAsync($pdf)) ([Windows.Storage.StorageFile])
  $document = Espera ([Windows.Data.Pdf.PdfDocument]::LoadFromFileAsync($fitxer)) ([Windows.Data.Pdf.PdfDocument])
  $pagina = $document.GetPage([uint32]0)
  $opcions = New-Object Windows.Data.Pdf.PdfPageRenderOptions
  $opcions.DestinationWidth = [uint32]1200

  $desti = Espera ([Windows.Storage.StorageFolder]::GetFolderFromPathAsync($carpeta.FullName)) ([Windows.Storage.StorageFolder])
  $sortida = Espera ($desti.CreateFileAsync("portada.png", [Windows.Storage.CreationCollisionOption]::ReplaceExisting)) ([Windows.Storage.StorageFile])
  $flux = Espera ($sortida.OpenAsync([Windows.Storage.FileAccessMode]::ReadWrite)) ([Windows.Storage.Streams.IRandomAccessStream])
  EsperaAccio ($pagina.RenderToStreamAsync($flux, $opcions))
  $flux.Dispose()
  $pagina.Dispose()

  Write-Host "Portada generada: $($carpeta.Name)"
  $generades++
}

Write-Host "Fet. Portades noves: $generades"
