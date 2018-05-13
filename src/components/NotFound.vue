<template>
  <div class="menu">
    not found
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      links: [
        {
          path: 'main',
          text: 'Главная'
        },
        {
          path: 'breed',
          text: 'Порода'
        },
        {
          path: 'favorite',
          text: 'Избранное'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
