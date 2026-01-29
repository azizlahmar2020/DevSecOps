#!/bin/bash

echo "🔍 Vérification de l'état des services DevSecOps..."
echo ""

# Couleurs
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Fonction de vérification
check_service() {
    local name=$1
    local url=$2
    local port=$3
    
    echo -n "Vérification de $name (port $port)... "
    
    if command -v curl &> /dev/null; then
        if curl -s -o /dev/null -w "%{http_code}" "$url" | grep -q "200\|302"; then
            echo -e "${GREEN}✓ OK${NC}"
            return 0
        else
            echo -e "${RED}✗ ERREUR${NC}"
            return 1
        fi
    else
        # Fallback pour Windows sans curl
        if netstat -an | grep -q ":$port.*LISTEN"; then
            echo -e "${YELLOW}? Port ouvert${NC}"
            return 0
        else
            echo -e "${RED}✗ Port fermé${NC}"
            return 1
        fi
    fi
}

# Vérification de Docker
echo "📦 Docker Status:"
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
echo ""

# Vérification des services
echo "🌐 Services Health Check:"
check_service "Database" "http://localhost:3306" "3306"
check_service "Backend API" "http://localhost:8089/foyer/Bloc/allBloc" "8089"
check_service "Frontend" "http://localhost:4200" "4200"
echo ""

# Vérification des images Docker
echo "🖼️ Images Docker:"
docker images | grep "foyer\|angular"
echo ""

# Logs récents
echo "📋 Derniers logs (10 lignes):"
echo "--- Backend ---"
docker logs --tail 10 foyer-backend 2>&1 || echo "Backend container not running"
echo ""
echo "--- Database ---"
docker logs --tail 10 foyer-database 2>&1 || echo "Database container not running"
echo ""

echo "✅ Vérification terminée!"
echo ""
echo "URLs d'accès:"
echo "  Frontend:  http://localhost:4200"
echo "  Backend:   http://localhost:8089/foyer"
echo "  Database:  localhost:3306 (user: root, password: root)"
