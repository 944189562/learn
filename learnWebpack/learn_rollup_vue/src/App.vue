<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "Hello Vue~, My Name is Justin",
    };
  },
};
</script>
<style scoped>
.title {
  color: red;
}
</style>
