# SPA static server for BOYZ N THE HOOD offline clone
# Usage: powershell -ExecutionPolicy Bypass -File .\serve.ps1
param([int]$Port = 8080)

Set-Location $PSScriptRoot

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  Write-Host "Node.js is required. Install from https://nodejs.org then re-run." -ForegroundColor Red
  Write-Host "Or run: npx --yes serve -s . -l $Port" -ForegroundColor Yellow
  exit 1
}

node .\serve.js $Port
