import { reactive } from 'vue';

export const store = reactive({
  selectedArchetype: '',
  cardsApi: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
  archeotypesApi: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?',
});
