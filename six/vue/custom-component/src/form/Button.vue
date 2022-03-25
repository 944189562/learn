<template>
  <div>
    <button @click.prevent="handleClick">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'LgButton',
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
      evt.preventDefault()
    }
  }
}
</script>

<style>
</style>