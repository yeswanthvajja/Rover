FROM mcr.microsoft.com/dotnet/sdk:6.0 AS backendbuild
WORKDIR /src
COPY ./BackendService/RoverService.csproj /src/RoverService/
RUN dotnet restore "RoverService/RoverService.csproj"
COPY ./BackendService/ /src/RoverService
WORKDIR "/src/RoverService"
RUN dotnet build "RoverService.csproj" -c Release -o /app/build && \
    dotnet publish "RoverService.csproj" -c Release -o /app/publish /p:UseAppHost=false


FROM node:18-bullseye-slim AS frontendbuild
WORKDIR /src
COPY . .
RUN npm install && \
    npm run build

FROM alpine:latest as getcaddy
RUN apk add --no-cache wget tar
RUN wget -q https://github.com/caddyserver/caddy/releases/download/v2.7.5/caddy_2.7.5_linux_amd64.tar.gz -O cad.tar.gz && \
    tar xzf cad.tar.gz && \
    rm -rf cad.tar.gz && \
    chmod a+x caddy && \
    mv caddy /usr/bin/caddy

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS  final
ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8888
WORKDIR /app

COPY --from=backendbuild /app/publish .
COPY --from=frontendbuild /src/dist /app/static
COPY --from=getcaddy /usr/bin/caddy /usr/bin/caddy
COPY ./Caddyfile .
COPY ./scripts/run.sh .

RUN chmod +x run.sh

ENTRYPOINT ["./run.sh"]