<template>
  <div class="profile">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    msg: String
  },
  components: {
  },
  mixins: [],
  data: function() {
    return {
      message: "Profile"
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
  .profile {
    
  }
</style>


