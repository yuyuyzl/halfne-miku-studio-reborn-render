cd /d %~dp0
set path=%path%;%cd%\bin
copy %1 src\in.json
call npx remotion preview src/index.jsx
pause