cd /d %~dp0
copy %1 src/in.json
call npx remotion preview src/index.jsx
pause