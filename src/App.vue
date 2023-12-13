<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import AppSearchSelect from './components/AppSearchSelect.vue';
export default {
  name: 'DefaultTemplate',
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    AppSearchSelect,
  },
};
</script>

<template>
  <AppHeader />
  <div class="app-main-container">
    <AppSearchSelect />
    <AppMain />
  </div>
</template>

<style scoped lang="scss">
@use './assets/scss/partials/variables' as *;
@use './assets/scss/partials/common' as *;
@use './assets/scss/partials/reset' as *;

.app-main-container {
  padding: 100px;
  background-color: orange;
}
</style>
