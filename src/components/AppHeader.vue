<script>
export default {
  name: 'AppHeader',
};
</script>

<template>
  <div class="head-container">
    <!-- Logo -->
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/2/21/Yu-Gi-Oh%21.png"
      alt="Logo Yu-Gi-Oh!"
    />
    <!-- Titolo -->
    <h1>Yu-Gi-Oh Api</h1>
  </div>
</template>

<style scoped lang="scss">
.head-container {
  background-color: #2d3436;
  background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);
  display: flex;
  align-items: center;
  padding: 40px;
  img {
    width: 100px;
  }

  h1 {
    margin-left: 40px;
    font-size: 3rem;
    color: white;
  }
}
</style>
