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
  <div class="cardinfo-container">
    <img :src="imageUrl" :alt="name" />
    <h3>{{ name }}</h3>
    <p>{{ archetype }}</p>
  </div>
</template>

<style scoped lang="scss">
.cardinfo-container {
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: orange;
  text-align: center;
  transition: transform 0.3s ease;
  padding-bottom: 10px;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    max-width: 100%;
    height: auto;
  }

  h3 {
    margin-top: 0.5rem;
    font-size: 0.8rem;
    text-transform: uppercase;
    color: white;
  }

  p {
    font-size: 0.9rem;
    color: black;
    margin-top: 10px;
  }
}
</style>
