<script>
export default {
  name: 'AppHeader',
};
</script>

<template>
  <div class="head-container">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg/800px-Yu-Gi-Oh%21_%28Logo%29.jpg?20160216230530"
      alt="Logo Yu-Gi-Oh!"
    />
    <h1>Yu-Gi-Oh Api</h1>
  </div>
</template>

<style scoped lang="scss">
.head-container {
  display: flex;
  align-items: center;
  padding: 40px;
  img {
    width: 100px;
  }

  h1 {
    margin-left: 40px;
    font-size: 3rem;
  }
}
</style>
