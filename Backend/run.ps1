# Script pour configurer et lancer le projet Backend

# Configuration JAVA_HOME
$env:JAVA_HOME = "C:\Users\moham\.jdks\openjdk-21.0.2"
$env:PATH = "$env:JAVA_HOME\bin;$env:PATH"

Write-Host "===========================================
" -ForegroundColor Cyan
Write-Host "  Backend Spring Boot - Démarrage" -ForegroundColor Cyan
Write-Host "===========================================
" -ForegroundColor Cyan
Write-Host ""

Write-Host "[OK] JAVA_HOME: $env:JAVA_HOME" -ForegroundColor Green
Write-Host ""

# Vérifier MySQL
$mysqlRunning = netstat -an | Select-String ":3306.*LISTENING"
if ($mysqlRunning) {
    Write-Host "[OK] MySQL est en écoute sur le port 3306" -ForegroundColor Green
} else {
    Write-Host "[ATTENTION] MySQL ne semble pas démarré" -ForegroundColor Yellow
    Write-Host "Démarrez MySQL avant de continuer" -ForegroundColor Yellow
    Write-Host ""
    $continue = Read-Host "Continuer quand même ? (O/N)"
    if ($continue -ne "O") {
        exit 1
    }
}

Write-Host ""
Write-Host "Lancement de l'application..." -ForegroundColor Cyan
Write-Host ""

# Lancer l'application
& "$PSScriptRoot\mvnw.cmd" spring-boot:run
