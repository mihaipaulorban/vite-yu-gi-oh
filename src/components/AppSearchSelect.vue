<script>
import axios from 'axios';

export default {
  name: 'SearchSelect',
  data() {
    return {
      archetypes: [],
      selectedArchetype: '',
    };
  },
  created() {
    this.fetchArchetypes();
  },
  methods: {
    fetchArchetypes() {
      axios
        .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
        .then((response) => {
          const cards = response.data.data;
          this.archetypes = [
            ...new Set(
              cards
                .map((card) => card.archetype)
                .filter((archetype) => archetype)
            ),
          ];
        })
        .catch((error) => console.error('Error fetching archetypes:', error));
    },
  },
};
</script>

<template>
  <div>
    <select v-model="selectedArchetype">
      <option value="">Select an archetype</option>
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
