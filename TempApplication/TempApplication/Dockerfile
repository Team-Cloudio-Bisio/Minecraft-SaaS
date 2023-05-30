FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["TempApplication/TempApplication.csproj", "TempApplication/"]
RUN dotnet restore "TempApplication/TempApplication.csproj"
COPY . .
WORKDIR "/src/TempApplication"
RUN dotnet build "TempApplication.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "TempApplication.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "TempApplication.dll"]
