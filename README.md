# Timer visuel de classe

Webapp React + Vite pour afficher un timer visuel en classe.

Au départ, la page affiche des motifs SVG colorés. Les motifs disparaissent progressivement pendant le décompte :

- pour une durée de 60 secondes ou moins, il y a 1 motif par seconde ;
- pour une durée supérieure à 60 secondes, l'application garde au maximum 60 motifs et augmente automatiquement le délai moyen de disparition.

## Fonctionnalités

- Réglage minutes / secondes
- Choix du motif : cœurs, nounours, bonbons, étoiles, fleurs, ballons
- SVG personnalisés avec contours épais et couleurs vives
- Boutons démarrer / pause / réinitialiser
- Mode plein écran
- Son de fin optionnel
- Sauvegarde automatique des préférences dans le navigateur
- Déploiement GitHub Pages via GitHub Actions

## Installation locale

```bash
npm install
npm run dev
```

Puis ouvrir l'URL indiquée par Vite, souvent :

```txt
http://localhost:5173
```

## Tester le build de production

```bash
npm run build
npm run preview
```

## Déploiement GitHub Pages

1. Créer un dépôt GitHub.
2. Envoyer le projet dans le dépôt.
3. Dans GitHub : `Settings` → `Pages` → `Build and deployment` → `Source` → `GitHub Actions`.
4. Pousser sur la branche `main`.
5. Le workflow `.github/workflows/deploy.yml` construit et publie automatiquement le dossier `dist`.

Le fichier `vite.config.ts` détecte automatiquement le nom du dépôt GitHub dans GitHub Actions pour configurer le bon chemin `base`.

## Ajouter un nouveau motif

Ajouter un composant SVG dans `src/data/patterns.tsx`, puis l'ajouter au tableau `patterns` :

```tsx
{ id: "apple", label: "Pommes", Component: AppleSvg }
```

Le reste de l'application n'a pas besoin d'être modifié.
