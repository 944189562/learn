<template>
  <div>
    <h1>Home</h1>
    <!-- router-link -->
    <router-link to="/about">About</router-link>
    <!-- 编程式导航 -->
    <button @click="goAbout">About</button> <br />
    title: {{ title }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HomePage',
  layout: 'default',
  methods: {
    goAbout() {
      this.$router.push('/about')
    }
  },
  async asyncData() {
    const { data } = await axios({
      method: 'GET',
      url: 'http://localhost:3000/data.json'
    })

    return data
  }
}
</script>

<style>

</style>