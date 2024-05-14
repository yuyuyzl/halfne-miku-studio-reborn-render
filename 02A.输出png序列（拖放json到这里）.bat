cd /d %~dp0
set path=%cd%\bin;%path%
for /f "tokens=1 delims=v" %%a in ('node -v') do set version=%%a
if %version% GTR 17 set NODE_OPTIONS=--openssl-legacy-provider
copy %1 src\in.json
if not exist "out" mkdir out
call npx remotion render src/index.jsx HelloWorld out --config .\remotion.config.png.js
wmic process where "commandline like '%%chrome.exe\" --type=renderer --headless --no-sandbox --disable-background-timer-throttling --disable-breakpad --enable-automation --force-color-profile=srgb%%'" delete
pause