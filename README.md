# Yu-Gi-Oh Card List

Questo progetto è una singola pagina applicazione che mostra una lista di carte Yu-Gi-Oh recuperate dinamicamente tramite l'API ufficiale di Yu-Gi-Oh. Utilizza Vue.js e Axios per le richieste.

## Funzionalità

- Visualizza una lista di carte Yu-Gi-Oh con dettagli come nome, immagine e archetipo.
- Conteggio dinamico delle carte visualizzate.

## Tecnologie Utilizzate per ora

- Vue.js
- Axios per le richieste API
- SCSS per lo styling
- API di Yu-Gi-Oh per i dati delle carte

## Struttura del Progetto per ora

- `MainCard.vue`: Componente che rappresenta una singola carta.
- `CardList.vue`: Componente principale che gestisce lo stato e il rendering dell'elenco delle carte.

Quando l'applicazione viene caricata esegue una chiamata all'API in `created` per ottenere i dati delle carte.
Questi dati sono quindi trasformati e memorizzati in un array chiamato `cards`, che contiene solo le informazioni essenziali come l'ID della carta, il nome, l'URL dell'immagine e l'archetipo.

Il componente `CardList` calcola dinamicamente il numero di carte recuperate e lo visualizza.
Lo fa con una proprietà calcolata (computed) di Vue chiamata cardsCount, che si segna il numero di elementi nell'array cards.

Nel file HTML del template, con un v-for iteraa sull'array cards e genera una lista di componenti MainCard, ognuno dei quali rappresenta una carta di Yu-Gi-Oh.

Ogni MainCard visualizza le informazioni di una carta specifica.
