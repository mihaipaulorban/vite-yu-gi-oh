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
  <div>
    <img :src="imageUrl" :alt="name" />
    <h3>{{ name }}</h3>
    <p>{{ archetype }}</p>
  </div>
</template>
