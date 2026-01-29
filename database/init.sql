-- Script d'initialisation de la base de données
CREATE DATABASE IF NOT EXISTS foyer_db;
USE foyer_db;

-- Exemple de création de tables (à adapter selon vos besoins)
CREATE TABLE IF NOT EXISTS universite (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nom_universite VARCHAR(255) NOT NULL,
    adresse VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS foyer (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nom_foyer VARCHAR(255) NOT NULL,
    capacite_foyer INT,
    universite_id BIGINT,
    FOREIGN KEY (universite_id) REFERENCES universite(id)
);

CREATE TABLE IF NOT EXISTS bloc (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nom_bloc VARCHAR(255) NOT NULL,
    capacite_bloc INT,
    foyer_id BIGINT,
    FOREIGN KEY (foyer_id) REFERENCES foyer(id)
);

CREATE TABLE IF NOT EXISTS chambre (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    numero_chambre INT NOT NULL,
    type_chambre VARCHAR(50),
    bloc_id BIGINT,
    FOREIGN KEY (bloc_id) REFERENCES bloc(id)
);

CREATE TABLE IF NOT EXISTS utilisateur (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    mot_de_passe VARCHAR(255) NOT NULL,
    role VARCHAR(50),
    cin VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS reservation (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    date_debut DATE,
    date_fin DATE,
    est_valide BOOLEAN DEFAULT FALSE,
    utilisateur_id BIGINT,
    chambre_id BIGINT,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateur(id),
    FOREIGN KEY (chambre_id) REFERENCES chambre(id)
);

-- Insertion de données de test (optionnel)
INSERT INTO universite (nom_universite, adresse) VALUES 
    ('Université Esprit', 'Ghazela, Ariana'),
    ('Université Centrale', 'Tunis Centre');

INSERT INTO utilisateur (nom, prenom, email, mot_de_passe, role, cin) VALUES 
    ('Admin', 'System', 'admin@foyer.tn', '$2a$10$dummyHashedPassword', 'ADMIN', '12345678');
