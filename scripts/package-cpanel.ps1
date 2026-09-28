param(
    [string]$ProjectRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path,
    [string]$OutFile = (Join-Path (Resolve-Path (Join-Path $PSScriptRoot "..")).Path "releases\first-world-dev-cpanel.zip")
)

$ErrorActionPreference = "Stop"

$requiredPaths = @(
    (Join-Path $ProjectRoot "src"),
    (Join-Path $ProjectRoot "public"),
    (Join-Path $ProjectRoot "scripts"),
    (Join-Path $ProjectRoot "package.json"),
    (Join-Path $ProjectRoot "package-lock.json"),
    (Join-Path $ProjectRoot "app.js"),
    (Join-Path $ProjectRoot "vite.config.ts"),
    (Join-Path $ProjectRoot "tsconfig.json"),
    (Join-Path $ProjectRoot "components.json"),
    (Join-Path $ProjectRoot "eslint.config.js"),
    (Join-Path $ProjectRoot "README.md"),
    (Join-Path $ProjectRoot "wrangler.toml"),
    (Join-Path $ProjectRoot "netlify.toml"),
    (Join-Path $ProjectRoot ".gitignore"),
    (Join-Path $ProjectRoot "bunfig.toml")
)

$missing = $requiredPaths | Where-Object { -not (Test-Path $_) }
if ($missing.Count -gt 0) {
    throw "The following required files/folders are missing from the project: $($missing -join ', ')"
}

$destinationDir = Split-Path -Parent $OutFile
New-Item -ItemType Directory -Path $destinationDir -Force | Out-Null
if (Test-Path $OutFile) {
    Remove-Item $OutFile -Force
}

Compress-Archive -Path $requiredPaths -DestinationPath $OutFile -Force

Write-Host "Created lightweight cPanel package: $OutFile"
Get-Item $OutFile | Select-Object FullName, Length
