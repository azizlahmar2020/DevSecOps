# 🔧 Configuration IntelliJ IDEA - Backend

## ✅ Le projet a été compilé avec succès !

Le fichier `.class` a été généré dans :
`Backend/target/classes/com/example/springbootesprit/SpringBootEspritApplication.class`

---

## 🛠️ Configuration IntelliJ IDEA

### Étape 1 : Configurer le SDK Java

1. **File** → **Project Structure** (Ctrl+Alt+Shift+S)
2. **Project** → **Project SDK** : Sélectionner **openjdk-21.0.2**
   - Path : `C:\Users\moham\.jdks\openjdk-21.0.2`
3. **Project language level** : `17 - Sealed types, always-strict floating-point semantics`
4. Cliquer sur **Apply** puis **OK**

### Étape 2 : Configurer Maven

1. **File** → **Settings** (Ctrl+Alt+S)
2. **Build, Execution, Deployment** → **Build Tools** → **Maven**
3. **Maven home path** : Utiliser le wrapper `mvnw` du projet
4. **JDK for importer** : Sélectionner **openjdk-21.0.2**
5. Cliquer sur **Apply** puis **OK**

### Étape 3 : Recharger le projet Maven

1. Ouvrir l'onglet **Maven** (à droite)
2. Cliquer sur l'icône **Reload** (🔄)
3. Attendre que les dépendances se téléchargent

### Étape 4 : Configurer la Run Configuration

1. **Run** → **Edit Configurations...**
2. Cliquer sur **+** → **Spring Boot**
3. Configuration :
   - **Name** : `SpringBootEspritApplication`
   - **Main class** : `com.example.springbootesprit.SpringBootEspritApplication`
   - **Working directory** : `$MODULE_WORKING_DIR$`
   - **Use classpath of module** : `SpringBootEsprit`
   - **JRE** : `openjdk-21.0.2`
4. **Apply** → **OK**

### Étape 5 : Lancer l'application

**Option A : Via IntelliJ IDEA**
- Cliquer sur le bouton **Run** (▶️) ou **Shift+F10**

**Option B : Via Terminal dans IntelliJ**
```powershell
cd Backend
.\run.ps1
```

**Option C : Via Command Prompt**
```batch
cd Backend
run.bat
```

---

## 🐛 Résolution du problème initial

### Problème rencontré :
```
Error: Could not find or load main class com.example.springbootesprit.SpringBootEspritApplication
Caused by: java.lang.ClassNotFoundException
```

### Causes et solutions :

✅ **RÉSOLU** - Le projet n'était pas compilé
- **Solution** : Exécution de `mvnw.cmd clean install`

✅ **RÉSOLU** - JAVA_HOME non configuré
- **Solution** : Configuration de `JAVA_HOME=C:\Users\moham\.jdks\openjdk-21.0.2`

✅ **RÉSOLU** - Classes `.class` non générées
- **Solution** : Compilation Maven a créé les fichiers dans `target/classes/`

---

## 📊 Vérifications

### Vérifier que tout fonctionne :

```powershell
# 1. Vérifier Java
java -version
# Devrait afficher : openjdk version "21.0.2"

# 2. Vérifier que les classes sont compilées
Test-Path "Backend\target\classes\com\example\springbootesprit\SpringBootEspritApplication.class"
# Devrait retourner : True

# 3. Lancer l'application
cd Backend
.\mvnw.cmd spring-boot:run
```

### URLs après démarrage :
- **Backend API** : http://localhost:8089/foyer
- **H2 Console** (si activé) : http://localhost:8089/h2-console

---

## 🔄 Si le problème persiste dans IntelliJ

### 1. Invalider les caches
- **File** → **Invalidate Caches** → **Invalidate and Restart**

### 2. Rebuild le projet
- **Build** → **Rebuild Project**

### 3. Réimporter Maven
- **Maven panel** → Clic droit sur le projet → **Reimport**

### 4. Nettoyer et recompiler
```powershell
cd Backend
.\mvnw.cmd clean install -DskipTests
```

---

## ✅ Prochaines étapes

1. ✅ Projet compilé avec succès
2. ✅ Classes générées dans `target/classes/`
3. ✅ Scripts de lancement créés (`run.ps1` et `run.bat`)
4. 🔄 Démarrer l'application avec IntelliJ ou via script
5. 🔄 Tester l'API : http://localhost:8089/foyer/Bloc/allBloc

---

**Date de résolution** : 29 Janvier 2026  
**Status** : ✅ RÉSOLU
