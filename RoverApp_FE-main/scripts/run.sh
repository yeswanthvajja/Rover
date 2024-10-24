#!/bin/sh

dotnet RoverService.dll &
sleep 2
caddy run --config ./Caddyfile