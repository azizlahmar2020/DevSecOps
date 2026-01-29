@echo off
echo ========================================
echo   Configuration Backend Spring Boot
echo ========================================

REM Configuration JAVA_HOME
set JAVA_HOME=C:\Users\moham\.jdks\openjdk-21.0.2
set PATH=%JAVA_HOME%\bin;%PATH%

echo [OK] JAVA_HOME configure: %JAVA_HOME%
java -version

echo.
echo ========================================
echo   Compilation du projet
echo ========================================
call mvnw.cmd clean install -DskipTests

if %errorlevel% neq 0 (
    echo [ERREUR] La compilation a echoue
    pause
    exit /b 1
)

echo.
echo [OK] Compilation reussie!
echo.
echo ========================================
echo   Lancement de l'application
echo ========================================
call mvnw.cmd spring-boot:run

pause
