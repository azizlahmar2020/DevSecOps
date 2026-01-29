@echo off
echo ========================================
echo    DevSecOps Health Check
echo ========================================
echo.

echo [1] Verification de Docker...
docker --version
if %errorlevel% neq 0 (
    echo [ERREUR] Docker n'est pas installe ou n'est pas dans le PATH
    pause
    exit /b 1
)
echo [OK] Docker est disponible
echo.

echo [2] Statut des conteneurs...
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
echo.

echo [3] Verification des ports...
netstat -an | findstr ":3306 :4200 :8089" > nul
if %errorlevel% equ 0 (
    echo [OK] Les ports sont utilises
    netstat -an | findstr "LISTENING" | findstr ":3306 :4200 :8089"
) else (
    echo [ATTENTION] Aucun port detecte en ecoute
)
echo.

echo [4] Test de connectivite Backend...
curl -s http://localhost:8089/foyer/Bloc/allBloc > nul 2>&1
if %errorlevel% equ 0 (
    echo [OK] Backend accessible
) else (
    echo [ERREUR] Backend inaccessible
)
echo.

echo [5] Test de connectivite Frontend...
curl -s http://localhost:4200 > nul 2>&1
if %errorlevel% equ 0 (
    echo [OK] Frontend accessible
) else (
    echo [ERREUR] Frontend inaccessible
)
echo.

echo [6] Images Docker disponibles...
docker images | findstr "foyer"
echo.

echo ========================================
echo URLs d'acces:
echo   Frontend:  http://localhost:4200
echo   Backend:   http://localhost:8089/foyer
echo   Database:  localhost:3306
echo ========================================
echo.

echo Appuyez sur une touche pour voir les logs...
pause > nul

echo.
echo === LOGS BACKEND (20 dernieres lignes) ===
docker logs --tail 20 foyer-backend 2>&1
echo.

echo === LOGS DATABASE (20 dernieres lignes) ===
docker logs --tail 20 foyer-database 2>&1
echo.

pause
