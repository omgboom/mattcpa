@echo off
setlocal

set "PREVIEW_PORT=4173"
set "PREVIEW_DIR=%TEMP%\mattcpa-preview"

echo Building production preview...
call npm.cmd run build
if errorlevel 1 exit /b 1

if exist "%PREVIEW_DIR%" rmdir /s /q "%PREVIEW_DIR%"
mkdir "%PREVIEW_DIR%"

robocopy "build" "%PREVIEW_DIR%" /E /NFL /NDL /NJH /NJS /NP >nul
if errorlevel 8 exit /b %errorlevel%

echo.
echo Preview available at http://localhost:%PREVIEW_PORT%
echo Serving files from %PREVIEW_DIR%
echo Press Ctrl+C to stop.
echo.

where py >nul 2>nul
if not errorlevel 1 (
  py -m http.server %PREVIEW_PORT% --directory "%PREVIEW_DIR%"
  exit /b %errorlevel%
)

where python >nul 2>nul
if not errorlevel 1 (
  python -m http.server %PREVIEW_PORT% --directory "%PREVIEW_DIR%"
  exit /b %errorlevel%
)

echo Python was not found. Install Python or run the preview from a non-OneDrive folder.
exit /b 1
