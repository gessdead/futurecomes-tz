<template>
  <div class="menu">
    <router-link v-for="link in links" :key="link.path" :to="link.path">
      <div v-if="link.path === 'breed'">
        <!--<select @change="changeLocation">-->
          <!--<option v-for="(value, key) in breeds" :key="key" :value="value">{{key}}</option>-->
        <!--</select>-->
        <div @click="isOpen = !isOpen">
          <span>
            {{ link.text }}
          </span>
          <ul v-if="isOpen">
            <li v-for="(value, key) in breeds" :key="key" :value="value"
                @click="() => changeLocation(key)">
              {{key}}
            </li>
          </ul>
        </div>
      </div>
      <div v-else>
        {{ link.text }}
      </div>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Menu',
  data () {
    return {
      isOpen: false,
      breeds: [],
      links: [
        {
          path: '/',
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
  },
  created () {
    axios.get('https://dog.ceo/api/breeds/list/all').then(resp => {
      this.$data.breeds = resp.data.message
    })
  },
  methods: {
    changeLocation (breed) {
      axios.get(`https://dog.ceo/api/breed/${breed}/images`)
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
