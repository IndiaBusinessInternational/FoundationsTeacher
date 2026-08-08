@echo off
title IBI Skilled Foundations Teacher
cd /d "%~dp0"
start "" http://localhost:3200
node "Backend\server.js"
pause
