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

    // Comunica il numero di carte a cards-count
    cardsCount() {
      return this.filteredCards.length;
    },
  },
  created() {
    // Faccio prendere a Axios l'API e in particolare i dati che servono a me
    axios.get(`${this.store.cardsApi}?num=500&offset=0`).then((response) => {
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
    <!-- Contatore delle carte -->
    <div class="cards-count">Found {{ cardsCount }} cards</div>
    <div class="cards-container">
      <!-- Ciclo per generarmi le carte -->
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
  padding: 3.5rem;
  .cards-count {
    font-size: 1.5rem;
    background-color: #2d3436;
    background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);
    color: white;
    padding: 1rem;
    border-radius: 100px;
    text-align: center;
    margin-bottom: 50px;
    box-shadow: 1px 8px 24px 0px rgba(66, 68, 90, 1);
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
