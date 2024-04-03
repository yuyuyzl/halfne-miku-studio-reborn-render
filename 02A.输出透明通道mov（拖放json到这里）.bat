cd /d %~dp0
set path=%cd%\bin;%path%
for /f "tokens=1 delims=v" %%a in ('node -v') do set version=%%a
if %version% GTR 17 set NODE_OPTIONS=--openssl-legacy-provider
copy %1 src\in.json
if not exist "out" mkdir out
call npx remotion render src/index.jsx HelloWorld out/video.mov --config .\remotion.config.mov.js
pause