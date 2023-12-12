<script>
export default {
  name: 'CardList',
  components: {
    MainCard,
  },
  data() {
    return {
      cards: [],
    };
  },
};
</script>

<template>
  <MainCard v-for="card in cards" />
</template>

<style scoped lang="scss"></style>
