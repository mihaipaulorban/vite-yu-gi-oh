<script>
import axios from 'axios';
import MainCard from './MainCard.vue';

export default {
  name: 'CardList',
  components: {
    MainCard,
  },
  data() {
    return {
      // Array che uso per le carte
      cards: [],

      //   Link dell'API
      apiURL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    };
  },
  created() {
    // Faccio prendere a Axios l'API e in particolare i dati che servono a me
    axios.get(`${this.apiURL}?num=20&offset=0`).then((response) => {
      this.cards = response.data.data

        //    Inserisco nell'array cards i dati di cui ho bisogno
        .map((card) => ({
          id: card.id,
          name: card.name,
          image_url: card.card_images[0].image_url,
          archetype: card.archetype,
        }))
        //   Uso slice per limitare i risultati
        .slice(0, 20);
    });
  },
};
</script>

<template>
  <div class="cards-container">
    <MainCard
      class="main-card"
      v-for="card in cards"
      :key="card.id"
      :name="card.name"
      :image-url="card.image_url"
      :archetype="card.archetype"
    />
  </div>
</template>

<style scoped lang="scss">
.cards-container {
  margin: auto;
  width: 70%;
  display: grid;

  //   il grid template divide in frazioni 'fr' da 150px ciascuna e ripete le card
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1rem;
  justify-items: center;
  padding: 1rem;
}
</style>
