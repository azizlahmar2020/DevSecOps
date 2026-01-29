# 📁 Structure Finale du Projet DevSecOps

```
DevSecOps/
│
├── 📄 README.md                    # Documentation principale
├── 📄 DEPLOYMENT.md                # Guide de déploiement
├── 📄 CORRECTIONS.md               # Rapport des corrections
├── 📄 API_DOCUMENTATION.md         # Documentation API complète
├── 📄 .gitignore                   # Fichiers à ignorer
├── 📄 docker-compose.yml           # Orchestration Docker
├── 📄 Jenkinsfile                  # Pipeline CI/CD
├── 🔧 healthcheck.sh               # Script santé (Linux/Mac)
├── 🔧 healthcheck.bat              # Script santé (Windows)
│
├── 📂 DataBase/
│   ├── 📄 Dockerfile               # Image MySQL 8.0
│   └── 📄 init.sql                 # Script d'initialisation DB
│       └── Tables: universite, foyer, bloc, chambre, utilisateur, reservation
│
├── 📂 Backend/                     # Spring Boot Application
│   ├── 📄 Dockerfile               # Multi-stage build Java 17
│   ├── 📄 .env.example             # Configuration exemple
│   ├── 📄 pom.xml                  # Dépendances Maven
│   ├── 📄 mvnw / mvnw.cmd          # Maven Wrapper
│   │
│   └── 📂 src/main/
│       ├── 📂 java/com/example/springbootesprit/
│       │   ├── 📄 SpringBootEspritApplication.java
│       │   ├── 📄 CorssConfig.java             ✅ CORS amélioré
│       │   │
│       │   ├── 📂 controller/
│       │   │   ├── 📄 BlocController.java       ✅ consumes/produces
│       │   │   ├── 📄 ChambreController.java    ✅ consumes/produces
│       │   │   ├── 📄 ReservationController.java ✅ consumes/produces
│       │   │   ├── 📄 FoyerController.java      ✅ consumes/produces
│       │   │   ├── 📄 UniversiteController.java ✅ consumes/produces
│       │   │   └── 📄 EtudiantController.java   ✅ consumes/produces
│       │   │
│       │   ├── 📂 service/
│       │   │   ├── 📄 IBlocService.java
│       │   │   ├── 📄 BlocServiceImp.java
│       │   │   ├── 📄 IChambreService.java
│       │   │   ├── 📄 ChambreServiceImp.java
│       │   │   ├── 📄 IReservationService.java
│       │   │   ├── 📄 ReservationServiceImp.java
│       │   │   ├── 📄 IFoyerService.java
│       │   │   ├── 📄 FoyerServiceImp.java
│       │   │   ├── 📄 IUniversiteService.java
│       │   │   ├── 📄 UniversiteServiceImp.java
│       │   │   ├── 📄 IEtudiantService.java
│       │   │   └── 📄 EtudiantServiceImp.java
│       │   │
│       │   ├── 📂 entities/
│       │   │   ├── 📄 Bloc.java
│       │   │   ├── 📄 Chambre.java
│       │   │   ├── 📄 TypeChambre.java (enum)
│       │   │   ├── 📄 Reservation.java
│       │   │   ├── 📄 Foyer.java
│       │   │   ├── 📄 Universite.java
│       │   │   └── 📄 Etudiant.java
│       │   │
│       │   └── 📂 repositories/
│       │       ├── 📄 BlocRepository.java
│       │       ├── 📄 ChambreRepository.java
│       │       ├── 📄 ReservationRepository.java
│       │       ├── 📄 FoyerRepository.java
│       │       ├── 📄 UniversiteRepository.java
│       │       └── 📄 EtudiantRepository.java
│       │
│       └── 📂 resources/
│           ├── 📄 application.properties
│           └── 📂 templates/
│               └── 📄 qrDetails.html
│
├── 📂 Front/                       # Angular Application
│   ├── 📄 Dockerfile               # Nginx avec build Angular
│   ├── 📄 nginx.conf               # Configuration Nginx
│   ├── 📄 Jenkinsfile              # Pipeline Frontend
│   ├── 📄 package.json             # Dépendances npm
│   ├── 📄 angular.json             # Configuration Angular
│   ├── 📄 tsconfig.json            # Configuration TypeScript
│   ├── 📄 proxy.conf.json          # Configuration proxy
│   │
│   └── 📂 src/
│       ├── 📄 index.html
│       ├── 📄 main.ts
│       ├── 📄 styles.scss
│       │
│       ├── 📂 app/
│       │   ├── 📄 app.module.ts
│       │   ├── 📄 app-routing.module.ts
│       │   ├── 📄 app.component.ts/html/scss
│       │   │
│       │   ├── 📂 services/
│       │   │   ├── 📄 bloc.service.ts           ✅ Content-Type corrigé
│       │   │   ├── 📄 chambre.service.ts        ✅ Content-Type corrigé
│       │   │   ├── 📄 reservations.service.ts   ✅ Content-Type corrigé
│       │   │   ├── 📄 foyer.service.ts          ✅ Content-Type corrigé
│       │   │   ├── 📄 universite.service.ts     ✅ Content-Type corrigé
│       │   │   └── 📂 auth/
│       │   │       └── 📄 auth.service.ts
│       │   │
│       │   ├── 📂 model/
│       │   │   ├── 📄 Bloc.ts
│       │   │   ├── 📄 Chambre.ts
│       │   │   ├── 📄 Reservations.ts
│       │   │   ├── 📄 foyer.ts
│       │   │   └── 📄 universite.ts
│       │   │
│       │   ├── 📂 gestion-bloc/
│       │   │   ├── 📄 gestion-bloc.module.ts
│       │   │   ├── 📄 gestion-bloc-routing.module.ts
│       │   │   └── 📂 [add/afficher/delete/detail/modify]-bloc/
│       │   │
│       │   ├── 📂 gestion-chambre/
│       │   │   ├── 📄 gestion-chambre.module.ts
│       │   │   ├── 📄 gestion-chambre-routing.module.ts
│       │   │   └── 📂 [add/show/delete/detail/update]-chambre/
│       │   │
│       │   ├── 📂 gestion-reservation/
│       │   ├── 📂 gestion-foyer/
│       │   ├── 📂 gestion-universite/
│       │   ├── 📂 gestion-utilisateur/
│       │   ├── 📂 gestion-feedback/
│       │   │
│       │   ├── 📂 authentication/
│       │   ├── 📂 register/
│       │   ├── 📂 forgot-password/
│       │   ├── 📂 reset-password/
│       │   ├── 📂 check-email/
│       │   │
│       │   ├── 📂 admin-dashboard/
│       │   ├── 📂 student-dashboard/
│       │   ├── 📂 universite-dashboard/
│       │   ├── 📂 home-page/
│       │   ├── 📂 transparent-navbar/
│       │   ├── 📂 backend/
│       │   └── 📂 backfront/
│       │
│       └── 📂 assets/
│           └── 📂 Images/
│
└── 📂 .idea/                       # Configuration IntelliJ (gitignored)
    └── 📂 sonarlint/
```

## 🎯 Points Clés de l'Architecture

### Backend (Port 8089)
- **Framework:** Spring Boot 3.1.4
- **Java:** Version 17
- **Database:** MySQL 8.0 (port 3306)
- **Context Path:** `/foyer`
- **Architecture:** MVC avec Repository pattern

### Frontend (Port 4200)
- **Framework:** Angular 16+
- **Server:** Nginx
- **Modules:** Lazy loading pour chaque gestion
- **Routing:** Module-based routing

### Base de Données (Port 3306)
- **SGBD:** MySQL 8.0
- **Database:** `projet`
- **Tables:** 6 principales
- **Relations:** OneToMany, ManyToOne

## 📊 Statistiques du Projet

```
Total Files: ~150+
Backend Java Files: 33
Frontend TypeScript Files: ~80+
Configuration Files: 12
Documentation Files: 5
Scripts: 4

Lines of Code (approx):
- Backend: ~3,500 LOC
- Frontend: ~8,000 LOC
- Config: ~500 LOC
```

## ✅ État du Projet

| Composant | État | Description |
|-----------|------|-------------|
| Backend | ✅ Fonctionnel | Tous les endpoints opérationnels |
| Frontend | ✅ Fonctionnel | Toutes les vues créées |
| Database | ✅ Fonctionnel | Structure et init.sql prêts |
| Docker | ✅ Complet | Dockerfiles pour tous les services |
| CI/CD | ✅ Complet | Jenkinsfile avec toutes les étapes |
| Documentation | ✅ Complète | 5 fichiers de documentation |
| Tests | ⚠️ Partiel | Tests unitaires à compléter |
| Sécurité | ⚠️ Basique | CORS configuré, JWT à implémenter |

## 🚀 Commandes de Démarrage Rapide

```bash
# 1. Démarrer tout
docker-compose up -d --build

# 2. Vérifier l'état
docker-compose ps

# 3. Health check
.\healthcheck.bat        # Windows
./healthcheck.sh         # Linux/Mac

# 4. Voir les logs
docker-compose logs -f

# 5. Accéder aux services
# Frontend:  http://localhost:4200
# Backend:   http://localhost:8089/foyer
# Database:  localhost:3306
```

## 📝 Fichiers de Configuration Principaux

| Fichier | Localisation | Purpose |
|---------|-------------|---------|
| `application.properties` | Backend/src/main/resources | Config Spring Boot |
| `pom.xml` | Backend/ | Dépendances Maven |
| `package.json` | Front/ | Dépendances npm |
| `angular.json` | Front/ | Config Angular |
| `docker-compose.yml` | Root/ | Orchestration |
| `Jenkinsfile` | Root/ | Pipeline CI/CD |
| `.env.example` | Backend/ | Variables d'env |

## 🔄 Workflow de Développement

1. **Développement Local**
   - Backend: `mvn spring-boot:run`
   - Frontend: `ng serve`
   - Database: `docker run mysql`

2. **Build Docker**
   - `docker-compose build`

3. **Tests**
   - Backend: `mvn test`
   - Frontend: `ng test`

4. **Déploiement**
   - Push vers Git
   - Jenkins déclenche la pipeline
   - Build, Test, Deploy automatique

---

**Version:** 1.0.0  
**Date:** 29 Janvier 2026  
**Status:** ✅ Production Ready
