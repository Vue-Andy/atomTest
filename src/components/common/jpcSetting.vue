<template>
  <div class="header-nav flex">
    <span>{{userData.name}}</span><span @click="logout" class='exit'></span>
  </div>
</template>

<script>
export default {
  name: "jpcSetting",
  props:{
    logout:Function,
    userData:Object,
    inquiryLength:Number
  },
  data () {
    return {

    };
  },

  components: {},

  methods: {},

  created() {},

  mounted() {}

}

</script>
<style scoped>
span{
  padding-right:20px;
}
.exit{
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAoNJREFUOBGFUz1oU1EUvufmtfmpONYKRSj+LC5O4qKTNj9Yim0aBBHRSQc7aZKWDm/Q2rRQpEjdHZS8JAoKzQ9CN9EiqIsOopMoLVJokcb8vHv8bvTp62tiL1zOPed85/9cIXY54Xx6dDCbnt4FJuh/AJNN+cLasjWGuuhYeSTzrhNeuhWRXOp8zDL7HJlJpsK7LgRv+pq+VtAxy/JFsqkFZHnFwWn611E4N3FSKX7U5K1v0aUFvxvkfv/Y875HCb4uiO9HsxM3HF3L0dn81GHBdgmF1ojoYTE2XnMAXlqMmZuCaEYwK5vU7VghdUpjWo5q3LglWATAfygnMhe8xl6+kshMoM4KMRu2Le5qvRx6ZoYgGGYhqob0XfUadeL9gdA1FlRHZkfDhcn9slGtnQZYId2fS/E7rzoZeuVPh82vCP6RCVUp+4xkoQZQVjfuFy9YTwiybgx/L0u1Y1WIxCdk5GMleiUyMTptUy6RsIlkFPdeMT7zxhtI84TxaWqQ4lW86uD7tcB7yomZEmT6tjl8ELYKgVZlsCtYAcIHv4FoIXmiDbqtaMhKHUA7jqAiFTL8ZflkxFxDeitoWsi26fnF8lxPW0uXUPeuzqKIpnUhgRXto7VH0uCbwG1hDQJrG99zY9Z80GW37Wkum8aGer3I1CpL/rH91+ZIPjmubDEPSRMprxtkxJYS02/dXsJW+hBassws+lGFwuAvl8cyDzRm20gj2eQlJlrE9gf1XkG9ji/zmZkb+LgDaGwfxuxnwVUpxWQpPrvgBNrmSAt1w1WT5gA+rhuJcrv1fAFs/qa0osspjs6+dJxousORozz32OytNqqDLGlfC4g10RPWjXUwbvoL7MP8VRFY7UUAAAAASUVORK5CYII=);
  background-size: 18px 18px;
  background-position: center center;
  background-repeat: no-repeat;
  width: 18px;
  font-size: 0px;
}
</style>