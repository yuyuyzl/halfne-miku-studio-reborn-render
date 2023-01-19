cd /d %~dp0
set path=%path%;%cd%\bin
copy %1 src\in.json
call npx remotion render src/index.jsx HelloWorld out/video.mp4
pause