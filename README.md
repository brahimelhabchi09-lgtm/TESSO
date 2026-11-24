# AKWA WAKA — Catalogue Sanitaire & Meubles de Salle de Bain

Catalogue web moderne, élégant et épuré pour la marque d'équipements sanitaires et mobilier de salle de bain contemporain **AKWA WAKA**.

---

## 🌟 Présentation du Projet

- **Identité Visuelle** : Palette de marque officielle Bleu Marine (`#092C49`), Bleu Aqua (`#08A6C1`), Aqua Clair (`#E9F4F5`), Fond Chaud (`#F5F4F0`) et Texte Sombre (`#202B35`).
- **Logo Officiel** : Intégration du logo officiel AKWA WAKA avec goutte d'eau stylisée et silhouette de douche.
- **Réseaux Sociaux** : Intégration officielle du profil Instagram [https://www.instagram.com/akwa_waka/](https://www.instagram.com/akwa_waka/) (@akwa_waka).
- **Catalogue Meubles 2026** : 43 modèles réels de meubles de salle de bain extraits du catalogue officiel 2026 avec photos haute définition, références originales (`V60-60 CM`, etc.) et dimensions.
- **Téléchargement PDF** : Le catalogue complet PDF 2026 est consultable et téléchargeable directement depuis le site.
- **Architecture 100% Frontend** : Aucune dépendance backend/base de données. Données centralisées dans `src/data/products.ts`.
- **Support des Devis WhatsApp** : Boutons de devis pré-remplis avec le nom et la référence exacte de chaque produit.
- **Déploiement Docker & Nginx** : Build multi-stage optimisé, servi par Nginx Alpine avec compression Gzip, gestion du cache et fallback SPA pour React Router sur le port 8080.

---

## 🚀 Démarrage Rapide

### Option A — Avec Docker (Recommandé en production)

Assurez-vous que Docker Desktop est lancé, puis exécutez à la racine du projet :

```bash
docker compose up --build -d
```

L'application est immédiatement accessible sur :  
👉 **[http://localhost:8080](http://localhost:8080)**

Pour arrêter le conteneur :
```bash
docker compose down
```

---

### Option B — En local (Développement)

1. **Installer les dépendances** :
   ```bash
   npm install
   ```

2. **Lancer le serveur de développement Vite** :
   ```bash
   npm run dev
   ```

3. **Compiler le projet pour la production** :
   ```bash
   npm run build
   ```

4. **Prévisualiser le build de production** :
   ```bash
   npm run preview -- --port 8080
   ```

---

## 📸 Gestion des Images de Produits

Toutes les images de vos produits sont organisées dans :

```
public/images/products/
├── brand/
│   └── akwa-waka-logo.png
├── meubles/              # 43 visuels extraits du CATALOGUE_MEUBLES_2026.pdf
├── wc/
├── lavabos/
├── robinetterie/
└── accessoires/
```

> **Note sur le Fallback Visuel** :  
> Si une photo de produit est manquante, l'application affiche automatiquement un encadré architectural épuré avec la référence du produit et la mention *"Visuel consultable en showroom"*. Aucun visuel cassé n'apparaît.

---

## 💶 Gestion des Prix et Produits (`src/data/products.ts`)

Tous les produits et leurs caractéristiques sont gérés dans un fichier unique :  
👉 [`src/data/products.ts`](file:///c:/Users/ycode/TESSO/src/data/products.ts)

### Règles pour les prix :
- Si un produit n'a pas de prix défini : indiquez `price: null`. L'interface affiche automatiquement **"Prix sur demande"**.
- Si un produit a un prix chiffré : indiquez la valeur numérique en Dirhams marocains (ex: `price: 4500` pour afficher `4 500 DH`).

---

## ⚙️ Configuration du Site & WhatsApp (`src/config/site.ts`)

Pour modifier le numéro WhatsApp, le téléphone, le lien Instagram ou l'adresse :  
👉 [`src/config/site.ts`](file:///c:/Users/ycode/TESSO/src/config/site.ts)

```ts
export const siteConfig = {
  name: "AKWA WAKA",
  tagline: "Sanitaire & Équipements de Bain d'Exception",
  logo: "/images/brand/akwa-waka-logo.png",
  socials: {
    instagram: "https://www.instagram.com/akwa_waka/",
  },
  whatsapp: {
    phoneNumber: "212600000000",
    displayNumber: "+212 (0) 6 00 00 00 00",
    defaultMessage: "Bonjour AKWA WAKA, je souhaite avoir plus d'informations concernant vos produits.",
  },
  pdfCatalogueUrl: "/CATALOGUE_MEUBLES_2026.pdf",
};
```

---

## 📁 Architecture des Fichiers

```
TESSO/
├── public/
│   ├── favicon.svg               # Favicon AKWA WAKA
│   ├── CATALOGUE_MEUBLES_2026.pdf # Catalogue complet téléchargeable
│   └── images/
│       ├── brand/
│       │   └── akwa-waka-logo.png
│       └── products/
│           ├── meubles/          # 43 modèles réels de meubles
│           ├── wc/
│           ├── lavabos/
│           ├── robinetterie/
│           └── accessoires/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx            # Navigation avec logo AKWA WAKA, Instagram & Catalogue PDF
│   │   ├── Footer.tsx            # Pied de page officiel AKWA WAKA
│   │   ├── ProductCard.tsx       # Carte produit avec devis WhatsApp
│   │   ├── ProductGrid.tsx       # Grille responsive avec gestion de l'état vide
│   │   ├── ProductImage.tsx      # Gestionnaire d'images avec fallback
│   │   ├── SearchBar.tsx         # Recherche par nom et par référence
│   │   └── CategoryFilter.tsx    # Filtres par univers avec compteurs
│   ├── pages/
│   │   ├── Home.tsx              # Page d'accueil avec hero & section Instagram
│   │   ├── Catalogue.tsx         # Catalogue complet avec 55 références
│   │   ├── ProductDetails.tsx    # Fiche produit détaillée avec devis
│   │   ├── Contact.tsx           # Showroom, Instagram & formulaire
│   │   └── About.tsx             # Univers de marque AKWA WAKA
│   ├── config/
│   │   └── site.ts               # Configuration globale
│   ├── data/
│   │   ├── categories.ts         # Univers de produits
│   │   └── products.ts           # 55 produits (dont 43 meubles réels)
│   ├── types/
│   │   └── product.ts            # Définitions TypeScript
│   ├── App.tsx                   # Routage SPA et bouton WhatsApp flottant
│   ├── index.css                 # Styles Tailwind CSS et utilitaires de marque
│   └── main.tsx
├── Dockerfile                    # Multi-stage build Node -> Nginx
├── docker-compose.yml            # Configuration Compose exposant le port 8080
├── nginx.conf                    # Configuration Nginx avec fallback SPA & Gzip
├── package.json
├── tailwind.config.js
└── vite.config.ts
```
