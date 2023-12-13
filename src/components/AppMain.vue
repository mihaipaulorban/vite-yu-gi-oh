<script>
import MainCardList from './MainCardList.vue';
import AppSearchSelect from './AppSearchSelect.vue';

export default {
  name: 'AppMain',
  components: {
    MainCardList,
    AppSearchSelect,
  },
};
</script>

<template>
  <div class="app-main-container">
    <!-- Select per il filtro -->
    <AppSearchSelect />

    <!-- Lista di carte -->
    <MainCardList />
  </div>
</template>

<style scoped lang="scss">
.app-main-container {
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
