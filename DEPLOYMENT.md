# 🚀 Guide de Déploiement Rapide

## Étape 1 : Vérification des prérequis

```powershell
# Vérifier Docker
docker --version

# Vérifier Docker Compose
docker-compose --version

# Vérifier que les ports sont libres
netstat -an | findstr "3306 4200 8089"
```

## Étape 2 : Cloner et accéder au projet

```powershell
git clone <votre-repo>
cd DevSecOps
```

## Étape 3 : Lancer l'application

### Méthode 1 : Docker Compose (RECOMMANDÉ)

```powershell
# Build et démarrer tous les services
docker-compose up -d --build

# Attendre que les services soient prêts (30-60 secondes)
# Vérifier l'état
docker-compose ps
```

### Méthode 2 : Build individuel

```powershell
# 1. Base de données
cd DataBase
docker build -t foyer-database .
docker run -d -p 3306:3306 --name foyer-db foyer-database

# 2. Backend (attendre 10 secondes que la DB soit prête)
cd ..\Backend
docker build -t foyer-backend .
docker run -d -p 8089:8089 --name foyer-api ^
  --link foyer-db:database ^
  -e SPRING_DATASOURCE_URL=jdbc:mysql://database:3306/projet ^
  foyer-backend

# 3. Frontend
cd ..\Front
docker build -t foyer-frontend .
docker run -d -p 4200:80 --name foyer-ui foyer-frontend
```

## Étape 4 : Vérification

### Tester les services

```powershell
# Backend health check
curl http://localhost:8089/foyer/Bloc/allBloc

# Frontend
# Ouvrir http://localhost:4200 dans le navigateur
```

### Voir les logs

```powershell
# Tous les logs
docker-compose logs -f

# Log d'un service spécifique
docker-compose logs -f backend
docker-compose logs -f database
docker-compose logs -f frontend
```

## Étape 5 : Arrêt et nettoyage

```powershell
# Arrêter les services
docker-compose down

# Arrêter et supprimer les volumes
docker-compose down -v

# Nettoyer complètement
docker-compose down -v --rmi all
```

## 🔧 Dépannage

### La base de données ne démarre pas

```powershell
# Vérifier les logs
docker-compose logs database

# Recréer avec un volume propre
docker-compose down -v
docker-compose up -d database
```

### Le backend ne peut pas se connecter à la DB

```powershell
# Attendre que la DB soit prête
docker-compose logs database | findstr "ready for connections"

# Redémarrer le backend
docker-compose restart backend
```

### Erreur de port déjà utilisé

```powershell
# Trouver le processus
netstat -ano | findstr ":8089"
netstat -ano | findstr ":3306"
netstat -ano | findstr ":4200"

# Arrêter le processus (remplacer PID)
taskkill /PID <PID> /F
```

### Rebuild après modifications

```powershell
# Rebuild un service spécifique
docker-compose up -d --build backend

# Rebuild tout
docker-compose down
docker-compose up -d --build
```

## 📊 URLs d'accès

- **Frontend** : http://localhost:4200
- **Backend API** : http://localhost:8089/foyer
- **Base de données** : localhost:3306
  - User: `root`
  - Password: `root`
  - Database: `projet`

## 🧪 Tests API avec curl

```powershell
# Lister les blocs
curl http://localhost:8089/foyer/Bloc/allBloc

# Lister les chambres
curl http://localhost:8089/foyer/Chambre/allChambre

# Ajouter un bloc
curl -X POST http://localhost:8089/foyer/Bloc/addBloc ^
  -H "Content-Type: application/json" ^
  -d "{\"nomBloc\":\"Bloc A\",\"capaciteBloc\":100}"

# Ajouter une chambre
curl -X POST http://localhost:8089/foyer/Chambre/addChambre ^
  -H "Content-Type: application/json" ^
  -d "{\"numeroChambre\":101,\"typeC\":\"SIMPLE\"}"
```

## 📝 Configuration de la Pipeline Jenkins

1. Créer un nouveau pipeline Jenkins
2. Configuration SCM : Git
3. Script path : `Jenkinsfile`
4. Configurer les credentials Docker Hub
5. Lancer le build

## ✅ Checklist de déploiement

- [ ] Docker et Docker Compose installés
- [ ] Ports 3306, 4200, 8089 disponibles
- [ ] Code récupéré depuis Git
- [ ] `docker-compose up -d --build` exécuté
- [ ] Services vérifiés avec `docker-compose ps`
- [ ] Frontend accessible sur http://localhost:4200
- [ ] Backend répond sur http://localhost:8089/foyer
- [ ] Base de données accepte les connexions

---

**Besoin d'aide ?** Consultez le [README.md](README.md) pour plus de détails.
