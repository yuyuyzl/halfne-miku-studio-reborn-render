cd /d %~dp0
copy %1 src/in.json
call npx remotion render src/index.jsx HelloWorld out/video.mov --config .\remotion.config.mov.js
pause