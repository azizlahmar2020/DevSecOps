# 📚 Documentation API - Foyer Management

Base URL: `http://localhost:8089/foyer`

## 🏢 Blocs

### GET /Bloc/allBloc
Récupérer tous les blocs

**Request:**
```bash
curl http://localhost:8089/foyer/Bloc/allBloc
```

**Response:** 200 OK
```json
[
  {
    "idBloc": 1,
    "nomBloc": "Bloc A",
    "capaciteBloc": 100,
    "foyers": null,
    "chambres": []
  }
]
```

---

### POST /Bloc/addBloc
Ajouter un nouveau bloc

**Request:**
```bash
curl -X POST http://localhost:8089/foyer/Bloc/addBloc \
  -H "Content-Type: application/json" \
  -d '{
    "nomBloc": "Bloc B",
    "capaciteBloc": 150
  }'
```

**Response:** 200 OK
```json
{
  "idBloc": 2,
  "nomBloc": "Bloc B",
  "capaciteBloc": 150,
  "foyers": null,
  "chambres": []
}
```

---

### PUT /Bloc/updateBloc
Modifier un bloc

**Request:**
```bash
curl -X PUT http://localhost:8089/foyer/Bloc/updateBloc \
  -H "Content-Type: application/json" \
  -d '{
    "idBloc": 1,
    "nomBloc": "Bloc A - Modifié",
    "capaciteBloc": 120
  }'
```

---

### DELETE /Bloc/deleteBloc/{id}
Supprimer un bloc

**Request:**
```bash
curl -X DELETE http://localhost:8089/foyer/Bloc/deleteBloc/1
```

---

### GET /Bloc/bloc/{id}
Récupérer un bloc par ID

**Request:**
```bash
curl http://localhost:8089/foyer/Bloc/bloc/1
```

---

### GET /Bloc/recherche/{nomBloc}
Rechercher un bloc par nom

**Request:**
```bash
curl http://localhost:8089/foyer/Bloc/recherche/Bloc%20A
```

---

### GET /Bloc/percentage/{idBloc}
Obtenir le pourcentage d'occupation d'un bloc

**Request:**
```bash
curl http://localhost:8089/foyer/Bloc/percentage/1
```

**Response:**
```json
{
  "occupationPercentage": 75.5
}
```

---

### PUT /Bloc/affecterFoyerABloc/{idFoyer}/{idBloc}
Affecter un foyer à un bloc

**Request:**
```bash
curl -X PUT http://localhost:8089/foyer/Bloc/affecterFoyerABloc/1/1
```

---

## 🛏️ Chambres

### GET /Chambre/allChambre
Récupérer toutes les chambres

**Request:**
```bash
curl http://localhost:8089/foyer/Chambre/allChambre
```

**Response:** 200 OK
```json
[
  {
    "idChambre": 1,
    "numeroChambre": 101,
    "typeC": "SIMPLE",
    "bloc": {
      "idBloc": 1,
      "nomBloc": "Bloc A"
    }
  }
]
```

---

### POST /Chambre/addChambre
Ajouter une nouvelle chambre

**Request:**
```bash
curl -X POST http://localhost:8089/foyer/Chambre/addChambre \
  -H "Content-Type: application/json" \
  -d '{
    "numeroChambre": 102,
    "typeC": "DOUBLE"
  }'
```

**Types de chambre disponibles:**
- `SIMPLE`
- `DOUBLE`
- `TRIPLE`

---

### PUT /Chambre/updateChambre/{id}
Modifier une chambre

**Request:**
```bash
curl -X PUT http://localhost:8089/foyer/Chambre/updateChambre/1 \
  -H "Content-Type: application/json" \
  -d '{
    "numeroChambre": 101,
    "typeC": "TRIPLE"
  }'
```

---

### DELETE /Chambre/deleteChambre/{id}
Supprimer une chambre

**Request:**
```bash
curl -X DELETE http://localhost:8089/foyer/Chambre/deleteChambre/1
```

---

### PUT /Chambre/affecterChambreABloc/{idChambre}/{idBloc}
Affecter une chambre à un bloc

**Request:**
```bash
curl -X PUT http://localhost:8089/foyer/Chambre/affecterChambreABloc/1/1
```

---

### PUT /Chambre/desaffecterChambreABloc/{idChambre}
Désaffecter une chambre d'un bloc

**Request:**
```bash
curl -X PUT http://localhost:8089/foyer/Chambre/desaffecterChambreABloc/1
```

---

### GET /Chambre/qr/{idChambre}
Générer un QR code pour une chambre

**Request:**
```bash
curl http://localhost:8089/foyer/Chambre/qr/1 -o qrcode.jpg
```

**Response:** Image JPEG

---

### GET /Chambre/by-bloc/{blocId}
Récupérer les chambres d'un bloc

**Request:**
```bash
curl http://localhost:8089/foyer/Chambre/by-bloc/1
```

---

### GET /Chambre/by-type/{typeChambre}
Récupérer les chambres par type

**Request:**
```bash
curl http://localhost:8089/foyer/Chambre/by-type/SIMPLE
```

---

## 📅 Réservations

### GET /Reservation/allReservation
Récupérer toutes les réservations

**Request:**
```bash
curl http://localhost:8089/foyer/Reservation/allReservation
```

**Response:** 200 OK
```json
[
  {
    "idReservation": "RES001",
    "anneeUniversite": "2024-2025",
    "estValide": true
  }
]
```

---

### POST /Reservation/addReservation
Créer une nouvelle réservation

**Request:**
```bash
curl -X POST http://localhost:8089/foyer/Reservation/addReservation \
  -H "Content-Type: application/json" \
  -d '{
    "idReservation": "RES002",
    "anneeUniversite": "2024-2025",
    "estValide": false
  }'
```

---

### PUT /Reservation/updateReservation/{id}
Modifier une réservation

**Request:**
```bash
curl -X PUT http://localhost:8089/foyer/Reservation/updateReservation/RES001 \
  -H "Content-Type: application/json" \
  -d '{
    "idReservation": "RES001",
    "anneeUniversite": "2024-2025",
    "estValide": true
  }'
```

---

### DELETE /Reservation/deleteRes/{id}
Supprimer une réservation

**Request:**
```bash
curl -X DELETE http://localhost:8089/foyer/Reservation/deleteRes/RES001
```

---

### PUT /Reservation/affecterReservationAChambre/{idReservation}/{idChambre}
Affecter une réservation à une chambre

**Request:**
```bash
curl -X PUT http://localhost:8089/foyer/Reservation/affecterReservationAChambre/RES001/1
```

---

### PUT /Reservation/desaffecterReservationAChambre/{idReservation}
Désaffecter une réservation d'une chambre

**Request:**
```bash
curl -X PUT http://localhost:8089/foyer/Reservation/desaffecterReservationAChambre/RES001
```

---

## 🏫 Universités

### GET /Universite/retrive-all-universites
Récupérer toutes les universités

**Request:**
```bash
curl http://localhost:8089/foyer/Universite/retrive-all-universites
```

---

### POST /Universite/add-universite
Ajouter une université

**Request:**
```bash
curl -X POST http://localhost:8089/foyer/Universite/add-universite \
  -H "Content-Type: application/json" \
  -d '{
    "nomUniversite": "Université Esprit",
    "adresse": "Ghazela, Ariana"
  }'
```

---

### PUT /Universite/update-universite
Modifier une université

**Request:**
```bash
curl -X PUT http://localhost:8089/foyer/Universite/update-universite \
  -H "Content-Type: application/json" \
  -d '{
    "idUniversite": 1,
    "nomUniversite": "Université Esprit",
    "adresse": "Nouvelle adresse"
  }'
```

---

### DELETE /Universite/remove-universite/{universite-id}
Supprimer une université

**Request:**
```bash
curl -X DELETE http://localhost:8089/foyer/Universite/remove-universite/1
```

---

## 🏠 Foyers

### GET /Foyer/allFoyer
Récupérer tous les foyers

**Request:**
```bash
curl http://localhost:8089/foyer/Foyer/allFoyer
```

---

### POST /Foyer/addFoyer
Ajouter un foyer

**Request:**
```bash
curl -X POST http://localhost:8089/foyer/Foyer/addFoyer \
  -H "Content-Type: application/json" \
  -d '{
    "nomFoyer": "Foyer Universitaire A",
    "capaciteFoyer": 500
  }'
```

---

### DELETE /Foyer/deleteFoyer/{id}
Supprimer un foyer

**Request:**
```bash
curl -X DELETE http://localhost:8089/foyer/Foyer/deleteFoyer/1
```

---

## 👨‍🎓 Étudiants

### GET /etudiant/allEtudiant
Récupérer tous les étudiants

**Request:**
```bash
curl http://localhost:8089/foyer/etudiant/allEtudiant
```

---

### POST /etudiant/addEtudiant
Ajouter un étudiant

**Request:**
```bash
curl -X POST http://localhost:8089/foyer/etudiant/addEtudiant \
  -H "Content-Type: application/json" \
  -d '{
    "nomEt": "Dupont",
    "prenomEt": "Jean",
    "cin": "12345678",
    "ecole": "Esprit"
  }'
```

---

### PUT /etudiant/updateEtudiant
Modifier un étudiant

**Request:**
```bash
curl -X PUT http://localhost:8089/foyer/etudiant/updateEtudiant \
  -H "Content-Type: application/json" \
  -d '{
    "idEtudiant": 1,
    "nomEt": "Dupont",
    "prenomEt": "Jean",
    "cin": "12345678",
    "ecole": "Esprit"
  }'
```

---

### DELETE /etudiant/deleteEtudiant/{id}
Supprimer un étudiant

**Request:**
```bash
curl -X DELETE http://localhost:8089/foyer/etudiant/deleteEtudiant/1
```

---

## 🔐 Codes de Statut HTTP

| Code | Description |
|------|-------------|
| 200  | OK - Requête réussie |
| 201  | Created - Ressource créée |
| 204  | No Content - Suppression réussie |
| 400  | Bad Request - Données invalides |
| 404  | Not Found - Ressource introuvable |
| 415  | Unsupported Media Type - Content-Type invalide |
| 500  | Internal Server Error - Erreur serveur |

---

## 💡 Bonnes Pratiques

1. **Toujours spécifier le Content-Type:**
   ```bash
   -H "Content-Type: application/json"
   ```

2. **Format JSON valide:**
   - Utiliser des guillemets doubles `"`
   - Pas de virgule après le dernier élément

3. **URL encoding:**
   - Encoder les espaces : `%20`
   - Encoder les caractères spéciaux

4. **Test avec Postman/Insomnia:**
   - Importer la collection d'endpoints
   - Sauvegarder les environnements (dev, prod)

---

## 🧪 Collection Postman

Pour importer dans Postman, créer une nouvelle collection avec ces endpoints.

**Variables d'environnement:**
```json
{
  "baseUrl": "http://localhost:8089/foyer"
}
```

---

**Version:** 1.0.0  
**Dernière mise à jour:** 29 Janvier 2026
