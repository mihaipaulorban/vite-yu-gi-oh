<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  name: 'DefaultTemplate',
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
};
</script>

<template>
  <main>
    <!-- Header con logo e titolo -->
    <AppHeader />

    <!-- Main con select, card counter e lista carte -->
    <AppMain />
  </main>
</template>

<style scoped lang="scss">
@use './assets/scss/partials/variables' as *;
@use './assets/scss/partials/common' as *;
@use './assets/scss/partials/reset' as *;
</style>
