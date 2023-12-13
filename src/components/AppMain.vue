<script>
import MainCardList from './MainCardList.vue';
import AppSearchSelect from './AppSearchSelect.vue';
import { store } from '../store';

export default {
  name: 'AppMain',
  components: {
    MainCardList,
    AppSearchSelect,
  },
  methods: {
    filterMethod() {
      console.log('Selected Archetype:', store.selectedArchetype);
    },
  },
};
</script>

<template>
  <div class="app-main-container">
    <AppSearchSelect @filter="filterMethod" />
    <MainCardList />
  </div>
</template>

<style scoped lang="scss">
.app-main-container {
  padding: 50px;
  background-color: orange;
}
</style>
