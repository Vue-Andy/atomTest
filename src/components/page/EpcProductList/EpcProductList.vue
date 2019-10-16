<template>
  <div>
    <button @click='num1++'>{{num1}}</button>
  </div>
</template>

<script>
export default {
  name: "EpcProductList",
  data () {
    return {
      num1: 10
    };
  },
}

</script>
<style scoped>
</style>