# TESSO — Catalogue Sanitaire & Équipements de Bain Haut de Gamme

Catalogue web moderne, élégant et épuré pour une marque d'équipements sanitaires et de salle de bain de prestige.

---

## 🌟 Présentation du Projet

- **Identité Visuelle** : Design haut de gamme inspiré des showrooms d'architecture intérieure (marbre, pierre naturelle, laiton brossé, noir onyx, blanc céramique et typographie éditoriale *Cormorant Garamond* & *Plus Jakarta Sans*).
- **Architecture 100% Frontend** : Aucune dépendance backend/base de données. Données centralisées, légères et faciles à maintenir.
- **Support des Devis WhatsApp** : Boutons de devis pré-remplis avec le nom et la référence exacte de chaque produit.
- **Déploiement Docker & Nginx** : Build multi-stage optimisé, servi par Nginx Alpine avec compression Gzip, gestion du cache et fallback SPA pour React Router.

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

Toutes les images de vos produits doivent être déposées dans le dossier :

```
public/images/products/
```

### Vos 2 Premiers Produits de Référence :

1. **Meuble de salle de bain** (Réf: `2043GR-40`) :
   - Fichier attendu : `public/images/products/meuble-salle-de-bain.jpg`
2. **WC intelligent** (Réf: `WC-001`) :
   - Fichier attendu : `public/images/products/wc-intelligent.jpg`

> **Note sur le Fallback Visuel** :  
> Si vous n'avez pas encore déposé un fichier image, l'application affiche automatiquement un encadré architectural épuré avec la référence du produit et la mention *"Visuel consultable en showroom"*. Aucun visuel cassé n'apparaît.

---

## 💶 Gestion des Prix et Produits (`src/data/products.ts`)

Tous les produits et leurs caractéristiques sont gérés dans un fichier unique :  
👉 [`src/data/products.ts`](file:///c:/Users/ycode/TESSO/src/data/products.ts)

### Règles pour les prix :
- Si un produit n'a pas de prix défini : indiquez `price: null`. L'interface affiche automatiquement **"Prix sur demande"**.
- Si un produit a un prix chiffré : indiquez la valeur numérique en Dirhams marocains (ex: `price: 4500` pour afficher `4 500 DH`).

### Exemple d'ajout d'un produit :
```ts
{
  id: 13,
  name: "Vasque Totem Autoportante Pierre Noire",
  reference: "VAS-TOT-01",
  category: "Lavabos et vasques",
  image: "/images/products/vasque-totem-noire.jpg",
  price: null, // ou un nombre ex: 6800
  description: "Vasque colonne monolithique sculptée dans du basalte noir.",
  shortDescription: "Vasque totem en pierre naturelle finition brute et cuve polie.",
  featured: true,
  dimensions: "Ø 45 cm x H 85 cm",
  material: "Pierre de basalte naturelle",
  finish: "Noir anthracite adouci",
  warranty: "10 ans",
  specifications: [
    { label: "Installation", value: "Évacuation au sol ou murale standard" },
    { label: "Poids", value: "65 kg" }
  ]
}
```

---

## ⚙️ Configuration du Site & WhatsApp (`src/config/site.ts`)

Pour modifier le numéro WhatsApp, le téléphone, l'adresse du showroom ou les horaires d'ouverture :  
👉 [`src/config/site.ts`](file:///c:/Users/ycode/TESSO/src/config/site.ts)

```ts
export const siteConfig = {
  name: "TESSO Sanitaire",
  whatsapp: {
    phoneNumber: "212600000000", // Numéro international sans '+' ni espaces
    displayNumber: "+212 (0) 6 00 00 00 00",
  },
  contact: {
    phone: "+212 (0) 5 22 00 00 00",
    email: "contact@tesso-sanitaire.ma",
    address: {
      full: "Angle Boulevard d'Anfa & Rue de la Corniche, Casablanca, Maroc",
    },
    openingHours: {
      weekdays: "Lundi - Vendredi : 09h00 - 19h00",
      saturday: "Samedi : 09h30 - 18h30",
      sunday: "Dimanche : Sur rendez-vous privé",
    },
  },
  currency: {
    symbol: "DH",
    onDemandText: "Prix sur demande",
  }
};
```

---

## 📁 Architecture des Fichiers

```
TESSO/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── fallback-product.svg
│       ├── hero-bathroom.svg
│       └── products/                 <-- Déposez vos photos de produits ici
│           ├── meuble-salle-de-bain.jpg
│           ├── wc-intelligent.jpg
│           └── .gitkeep
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                # Barre de navigation responsive avec logo & CTA
│   │   ├── Footer.tsx                # Pied de page avec horaires, coordonnées & liens
│   │   ├── ProductCard.tsx           # Carte produit avec prix, devis WhatsApp & détails
│   │   ├── ProductGrid.tsx           # Grille responsive avec gestion de l'état vide
│   │   ├── ProductImage.tsx          # Gestionnaire d'image locale avec fallback élégant
│   │   ├── SearchBar.tsx             # Barre de recherche par nom et par référence
│   │   └── CategoryFilter.tsx        # Filtres de catégories par pilules avec compteurs
│   ├── pages/
│   │   ├── Home.tsx                  # Page d'accueil avec hero, univers & pièces phares
│   │   ├── Catalogue.tsx             # Catalogue interactif avec recherche, tri & filtres
│   │   ├── ProductDetails.tsx        # Fiche produit détaillée avec spécifications & devis
│   │   ├── Contact.tsx               # Informations showroom, horaires & formulaire
│   │   └── About.tsx                 # Philosophie de la maison TESSO & matières nobles
│   ├── config/
│   │   └── site.ts                   # Configuration globale (WhatsApp, coordonnées, etc.)
│   ├── data/
│   │   ├── categories.ts             # Les 6 univers de produits
│   │   └── products.ts               # Base centrale des produits
│   ├── types/
│   │   └── product.ts                # Définitions TypeScript
│   ├── App.tsx                       # Routage SPA et bouton WhatsApp flottant
│   ├── index.css                     # Styles Tailwind CSS et utilitaires de luxe
│   └── main.tsx
├── Dockerfile                        # Multi-stage build Node -> Nginx
├── docker-compose.yml                # Configuration Compose exposant le port 8080
├── nginx.conf                        # Configuration Nginx avec fallback SPA & Gzip
├── .dockerignore
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```
