@echo off
cd /d %~dp0
set path=%cd%\bin;%path%
where node
if %ERRORLEVEL% NEQ 0 (
    echo bin/nodejs.exe not found.
    echo Check and follow link in /bin folder.
    pause
)
where ffmpeg
if %ERRORLEVEL% NEQ 0 (
    echo bin/ffmpeg.exe not found.
    echo Check and follow link in /bin folder.
    pause
)
set version=0
for /f "tokens=1 delims=v" %%a in ('node -v') do set version=%%a
if %version% GTR 17 set NODE_OPTIONS=--openssl-legacy-provider
call npm install
pause
