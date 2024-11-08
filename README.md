# Monthly Trend

![https://raw.githubusercontent.com/dynamick/monthly-trend/refs/heads/main/public/screenshot.png](https://raw.githubusercontent.com/dynamick/monthly-trend/refs/heads/main/public/screenshot.png)

Semplice componente React per visualizzare un grafico a barre mensili.


## Struttura del progetto

  Dopo l’installazione, troverai la struttura del progetto organizzata come segue:

    monthly-trend/
    ├── index.html
    ├── src/
    │   ├── components               # Cartella di componenti
    │   │   ├── MonthlyTrend         # Cartella del componente MonthlyTrend 
    │   │   │   ├── constants.ts     # Costanti per personalizzazioni
    │   │   │   ├── MonthlyBar.tsx   # Sottocomponente che identifica il mese
    │   │   │   ├── MonthlyTrend.tsx # Componente princiale
    │   │   │   ├── utils.ts         # Utility varie
    │   ├── App.tsx                  # Componente principale
    │   ├── main.tsx                 # Punto d'ingresso principale per React
    │   └── vite-env.d.ts            # Definizioni TypeScript specifiche per Vite
    ├── package.json
    └── tsconfig.json                # Configurazione TypeScript

## Demo

Si può provare il componente funzionante all’indirizzo:

[https://monthly-trend-git-main-dynamicks-projects.vercel.app/](https://monthly-trend-git-main-dynamicks-projects.vercel.app/)

## Installazione

- Clonare il progetto

    ```jsx
    git clone https://github.com/dynamick/monthly-trend.git
    ```

- **Accedi alla cartella del progetto**

  Dopo la creazione, entra nella directory del progetto:

    ```bash
    cd monthly-trend
    ```

- **Installa le dipendenze**

  Installa tutte le dipendenze necessarie usando:

    ```bash
    npm install
    ```

- **Avvia il progetto in modalità sviluppo**

  Una volta installate le dipendenze, puoi avviare il progetto con:

    ```bash
    npm run dev
    ```

  Vite farà partire un server locale, di solito accessibile su `http://localhost:5173`, e visualizzerà l'URL nel terminale.


Happy reviewing 🚀
