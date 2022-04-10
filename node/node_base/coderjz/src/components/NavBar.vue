<template>
  <div class="navbar">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'NavBar>',
  props: {
    msg: String
  },
  components: {
  },
  mixins: [],
  data: function() {
    return {
      message: "NavBar"
    }
  },
  created: function() {

  },
  mounted: function() {

  },
  computed: {

  },
  methods: {

  }
}
</script>

<style scoped>
  .navbar {
    
  }
</style>


