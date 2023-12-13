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
    <AppSearchSelect />
    <MainCardList />
  </div>
</template>

<style scoped lang="scss">
.app-main-container {
  padding: 50px;
  background-color: orange;
}
</style>
