# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

Accedi alla cartella del progetto

Dopo la creazione, entra nella directory del progetto:

bash
Copia codice
cd nome-progetto
Installa le dipendenze

Installa tutte le dipendenze necessarie usando:

bash
Copia codice
npm install
Avvia il progetto in modalità sviluppo

Una volta installate le dipendenze, puoi avviare il progetto con:

bash
Copia codice
npm run dev
Vite farà partire un server locale, di solito accessibile su http://localhost:5173, e visualizzerà l'URL nel terminale.

Struttura del progetto

Dopo l’installazione, troverai la struttura del progetto organizzata come segue:

graphql
Copia codice
nome-progetto/
├── index.html
├── src/
│   ├── App.tsx               # Componente principale
│   ├── main.tsx              # Punto d'ingresso principale per React
│   └── vite-env.d.ts         # Definizioni TypeScript specifiche per Vite
├── package.json
└── tsconfig.json             # Configurazione TypeScript
Modifica del Progetto

Ora puoi iniziare a lavorare sul tuo progetto. Modifica App.tsx o crea nuovi componenti nella cartella src.
