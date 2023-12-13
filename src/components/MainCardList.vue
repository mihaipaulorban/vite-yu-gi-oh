<script>
import axios from 'axios';
import MainCard from './MainCard.vue';
import { store } from '../store.js';

export default {
  name: 'CardList',
  components: {
    MainCard,
  },
  data() {
    return {
      // Array che uso per le carte
      cards: [],
      store,
    };
  },
  //   Computed per far capire al sito il numero di carte
  computed: {
    filteredCards() {
      // Controlla se un archetype è stato selezionato
      if (this.store.selectedArchetype) {
        // Filtra le carte in base all'archetype selezionato
        return this.cards.filter(
          (card) => card.archetype === this.store.selectedArchetype
        );
      }
      // Se non è stato selezionato alcun archetype, restituisce tutte le carte
      return this.cards;
    },
    cardsCount() {
      return this.filteredCards.length;
    },
  },
  created() {
    // Faccio prendere a Axios l'API e in particolare i dati che servono a me
    axios.get(`${this.store.cardsApi}?num=50&offset=0`).then((response) => {
      this.cards = response.data.data

        //    Inserisco nell'array cards i dati di cui ho bisogno
        .map((card) => ({
          id: card.id,
          name: card.name,
          image_url: card.card_images[0].image_url,
          archetype: card.archetype,
        }));
    });
  },
};
</script>

<template>
  <div class="card-list">
    <div class="cards-count">Found {{ cardsCount }} cards</div>
    <div class="cards-container">
      <MainCard
        class="main-card"
        v-for="card in filteredCards"
        :key="card.id"
        :name="card.name"
        :image-url="card.image_url"
        :archetype="card.archetype"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-list {
  width: 80%;
  margin: auto;
  background-color: white;
  padding: 3.5rem;
  .cards-count {
    font-size: 1.5rem;
    background-color: black;
    color: white;
    padding: 1rem;
  }
  .cards-container {
    width: 100%;
    display: grid;

    //   il grid template divide in frazioni 'fr' da 150px ciascuna e ripete le card
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 1rem;
    justify-items: center;
  }
}
</style>
