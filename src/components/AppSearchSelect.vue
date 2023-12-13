<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
  name: 'SearchSelect',
  data() {
    return {
      // Definisco l'arrey in cui inserire l'api e la stringa per lárcheotipo selezionato
      archetypes: [],

      // Aggiungo store perché altrimenti spacco tutto e non mi si forma il v-for
      store,
    };
  },
  created() {
    this.fetchArchetypes();
  },
  methods: {
    // Ottengo i dati degll'API
    fetchArchetypes() {
      axios

        // num=20&offset=0 <-- per debug
        .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?')
        .then((response) => {
          const cards = response.data.data;
          this.archetypes = [
            // Crea un insieme dall'array filtrato e leva i dublicati
            ...new Set(
              // Estrae il valore archeotype ad ogni carta
              cards
                .map((card) => card.archetype)
                .filter((archetype) => archetype)
            ),
          ];
        });
    },
    onChange() {
      // Emetto l'evento con lárcheotipo selezionato dal select
      store.selectedArchetype = event.target.value;
      this.$emit('filter', this.selectedArchetype);
    },
  },
};
</script>

<template>
  <div>
    <select v-model="store.selectedArchetype" @change="onChange">
      <option selected value="">Select an archetype</option>
      <option
        v-for="archetype in archetypes"
        :key="archetype"
        :value="archetype"
      >
        {{ archetype }}
      </option>
    </select>
  </div>
</template>

<style scoped lang="scss"></style>
