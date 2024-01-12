cd /d %~dp0
set path=%path%;%cd%\bin
for /f "tokens=1 delims=v" %%a in ('node -v') do set version=%%a
if %version% GTR 17 set NODE_OPTIONS=--openssl-legacy-provider
copy %1 src\in.json
call npx remotion preview src/index.jsx 
pause