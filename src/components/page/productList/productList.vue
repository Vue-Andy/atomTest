<template>
  <div>
    <button @click='num++'>{{num}}</button>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  data () {
    return {
      num:0
    };
  },
  mounted() {}
}

</script>
<style scoped>
</style>