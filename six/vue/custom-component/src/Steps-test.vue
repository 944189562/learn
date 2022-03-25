<template>
  <div>
    <step :count="count" :active="active" />
    <button @click="next">Next</button>
  </div>
</template>

<script>
import Step from './Step.vue'

export default {
  components: {
    Step
  },
  data() {
    return {
      count: 4,
      active: 0
    }
  },
  methods: {
    next() {
      console.log('next')
      if (this.active > this.count) return
      this.active++
      console.log(this.active)
    }
  }
}
</script>

<style>
</style>