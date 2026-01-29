# DevSecOps - Gestion de Foyer Universitaire

Application complète de gestion de foyer universitaire avec pipeline CI/CD.

## 🏗️ Architecture

```
DevSecOps/
├── DataBase/
│   ├── Dockerfile          # Image MySQL 8.0
│   └── init.sql           # Script d'initialisation
│
├── Backend/
│   ├── Dockerfile         # Spring Boot + Java 17
│   ├── pom.xml
│   └── src/
│
├── Front/
│   ├── Dockerfile         # Angular + Nginx
│   ├── package.json
│   └── src/
│
├── Jenkinsfile            # Pipeline CI/CD complète
└── docker-compose.yml     # Orchestration des services
```

## 🚀 Démarrage Rapide

### Option 1 : Avec Docker Compose (Recommandé)

```bash
# Démarrer tous les services
docker-compose up -d

# Vérifier l'état des services
docker-compose ps

# Voir les logs
docker-compose logs -f
```

**URLs d'accès :**
- Frontend : http://localhost:4200
- Backend API : http://localhost:8089/foyer
- Database : localhost:3306

### Option 2 : Démarrage Manuel

#### 1. Base de données
```bash
cd DataBase
docker build -t foyer-database .
docker run -d -p 3306:3306 --name foyer-db foyer-database
```

#### 2. Backend
```bash
cd Backend
mvn clean package
docker build -t foyer-backend .
docker run -d -p 8089:8089 --name foyer-api --link foyer-db:database foyer-backend
```

#### 3. Frontend
```bash
cd Front
npm install
npm run build --prod
docker build -t foyer-frontend .
docker run -d -p 4200:80 --name foyer-ui foyer-frontend
```

## 📋 Prérequis

- Docker 20.10+
- Docker Compose 1.29+
- Java 17 (pour développement local)
- Node.js 16+ (pour développement local)
- Maven 3.8+ (pour développement local)

## 🔧 Configuration

### Backend (application.properties)
```properties
server.port=8089
spring.datasource.url=jdbc:mysql://localhost:3306/projet
spring.datasource.username=root
spring.datasource.password=root
server.servlet.context-path=/foyer
```

### Frontend (environment.ts)
```typescript
apiUrl: 'http://localhost:8089/foyer'
```

## 🧪 Tests

### Backend
```bash
cd Backend
mvn test
```

### Frontend
```bash
cd Front
npm test
```

## 🔄 Pipeline CI/CD

Le Jenkinsfile inclut les étapes suivantes :

1. **Checkout** - Récupération du code source
2. **Check Tools** - Vérification des outils (Docker, Maven, Node)
3. **Build Database** - Construction de l'image Docker MySQL
4. **Build Backend** - Tests Maven + Build Docker
5. **Build Frontend** - Build Angular + Image Docker
6. **Run Tests** - Tests parallèles Backend/Frontend
7. **Security Scan** - Analyse de sécurité (Trivy)
8. **Push Images** - Push vers Docker Registry
9. **Deploy** - Déploiement automatique

## 📝 API Endpoints

### Chambres
- `GET /foyer/Chambre/allChambre` - Liste toutes les chambres
- `POST /foyer/Chambre/addChambre` - Ajouter une chambre
- `PUT /foyer/Chambre/updateChambre/{id}` - Modifier une chambre
- `DELETE /foyer/Chambre/deleteChambre/{id}` - Supprimer une chambre
- `PUT /foyer/Chambre/affecterChambreABloc/{idChambre}/{idBloc}` - Affecter à un bloc

### Blocs
- `GET /foyer/Bloc/allBloc` - Liste tous les blocs
- `POST /foyer/Bloc/addBloc` - Ajouter un bloc
- `PUT /foyer/Bloc/updateBloc` - Modifier un bloc
- `DELETE /foyer/Bloc/deleteBloc/{id}` - Supprimer un bloc

### Réservations
- `GET /foyer/Reservation/allReservation` - Liste toutes les réservations
- `POST /foyer/Reservation/addReservation` - Créer une réservation
- `PUT /foyer/Reservation/updateReservation/{id}` - Modifier une réservation

## 🛠️ Corrections Appliquées

### Frontend
✅ Correction typo `'application/Json'` → `'application/json'`  
✅ Ajout de `httpOptions` sur toutes les requêtes POST/PUT avec body  
✅ Remplacement de `null` par `{}` pour les requêtes sans body  
✅ Uniformisation des services HTTP

### Backend
✅ Ajout de `consumes = MediaType.APPLICATION_JSON_VALUE`  
✅ Ajout de `produces = MediaType.APPLICATION_JSON_VALUE`  
✅ Amélioration configuration CORS (credentials, maxAge, OPTIONS)  
✅ Ajout de `@CrossOrigin` sur tous les controllers

## 🐛 Résolution de Problèmes

### Erreur "Content-Type not supported"
✅ **Résolu** - Vérifiez que tous les services utilisent `application/json` (minuscule)

### CORS Error
✅ **Résolu** - Configuration CORS mise à jour avec credentials et all headers

### Connection Database Failed
```bash
# Vérifier que MySQL est démarré
docker-compose logs database

# Recréer les conteneurs
docker-compose down -v
docker-compose up -d
```

## 📦 Commandes Utiles

```bash
# Arrêter tous les services
docker-compose down

# Supprimer volumes et recréer
docker-compose down -v
docker-compose up -d --build

# Voir les logs d'un service spécifique
docker-compose logs -f backend

# Entrer dans un conteneur
docker exec -it foyer-backend bash

# Rebuild un service spécifique
docker-compose up -d --build backend
```

## ✨ Auteurs

Projet DevSecOps - Gestion de Foyer Universitaire
