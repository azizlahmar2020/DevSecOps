# 🔧 Résolution Erreur Base de Données

## ❌ Erreur rencontrée
```
Unable to determine Dialect without JDBC metadata
Unable to create requested service [org.hibernate.engine.jdbc.env.spi.JdbcEnvironment]
```

## ✅ Solution Appliquée

Le fichier `application.properties` a été corrigé pour fonctionner en **développement local**.

---

## 🗄️ Prérequis : MySQL doit être démarré

### Option 1 : Avec Docker (Recommandé)

```powershell
# Démarrer MySQL avec Docker
docker run -d `
  --name mysql-dev `
  -p 3306:3306 `
  -e MYSQL_ROOT_PASSWORD= `
  -e MYSQL_DATABASE=devsecopsdb `
  -e MYSQL_ALLOW_EMPTY_PASSWORD=yes `
  mysql:8.0

# Vérifier que MySQL est démarré
docker ps | Select-String mysql
```

### Option 2 : Avec MySQL local (XAMPP, MySQL Server, etc.)

1. Démarrer MySQL Server
2. Créer la base de données :
   ```sql
   CREATE DATABASE IF NOT EXISTS devsecopsdb;
   ```

### Option 3 : Avec docker-compose

```powershell
# Depuis la racine du projet
docker-compose up -d mysql

# Attendre 10 secondes que MySQL démarre
Start-Sleep -Seconds 10
```

---

## 🚀 Lancer l'Application

### Après avoir démarré MySQL :

```powershell
cd Backend
.\run.ps1
```

Ou directement avec Maven :
```powershell
cd Backend
.\mvnw.cmd spring-boot:run
```

---

## 📝 Configuration Base de Données

### Pour développement local (application.properties) ✅
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/devsecopsdb
spring.datasource.username=root
spring.datasource.password=
```

### Pour Docker (application-docker.yml) ✅
```yaml
spring:
  datasource:
    url: jdbc:mysql://mysql:3306/devsecopsdb
    username: devsecops
    password: devsecops
```

Le Dockerfile utilisera automatiquement le profil Docker.

---

## ✅ Vérifications

### 1. Vérifier que MySQL est accessible
```powershell
# Vérifier le port 3306
netstat -an | Select-String ":3306"

# Tester la connexion (si mysql client installé)
mysql -h localhost -u root -e "SHOW DATABASES;"
```

### 2. Lancer l'application
```powershell
cd Backend
.\mvnw.cmd spring-boot:run
```

### 3. Tester l'API
```powershell
# Une fois démarré
curl http://localhost:8089/foyer/Bloc/allBloc
```

---

## 🐛 Dépannage

### MySQL n'est pas démarré
**Symptôme** : `Unable to create requested service [JdbcEnvironment]`
**Solution** : Démarrer MySQL avec Docker ou localement

### Port 3306 déjà utilisé
```powershell
# Trouver le processus
netstat -ano | Select-String ":3306"

# Arrêter le conteneur existant
docker stop mysql-dev
docker rm mysql-dev
```

### Mauvais mot de passe
**Solution** : Vérifier `application.properties` et la configuration MySQL

---

## 📊 Résumé

| Environnement | Configuration | Host | Credentials |
|---------------|---------------|------|-------------|
| **Local** | application.properties | localhost:3306 | root / (vide) |
| **Docker** | application-docker.yml | mysql:3306 | devsecops / devsecops |

✅ Le problème est maintenant résolu ! Démarrez MySQL et relancez l'application.
