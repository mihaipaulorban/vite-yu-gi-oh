<script>
export default {
  name: 'MainCard',
  props: {
    name: String,
    imageUrl: String,
    archetype: String,
  },
};
</script>

<template>
  <!-- Struttura della carta -->
  <div class="cardinfo-container">
    <img :src="imageUrl" :alt="name" />
    <h3>{{ name }}</h3>
    <p>{{ archetype }}</p>
  </div>
</template>

<style scoped lang="scss">
.cardinfo-container {
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s ease;
  padding-bottom: 10px;

  &:hover {
    transform: translateY(-10px);
  }

  // Stili della carta
  img {
    max-width: 100%;
    height: auto;
    box-shadow: 1px -4px 31px 1px rgba(66, 68, 90, 1);
    border-radius: 3px;
  }
  // Stili del nome della carta
  h3 {
    margin-top: 0.5rem;
    font-size: 0.8rem;
    text-transform: uppercase;
    color: white;
  }
  // Stili del archeotipo
  p {
    font-size: 0.9rem;
    color: rgb(185, 135, 255);
    margin-top: 10px;
  }
}
</style>
