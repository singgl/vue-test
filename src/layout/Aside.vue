<style lang="less" scoped>
  .menubar{
    width: 150px;
    .el-menu{
      height: 100vh;
    }
  }
</style>

<template>
  <div class="menubar">
    <el-menu
      :default-active="activeMenu"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router>
      <template v-for="route in routers">
        <el-menu-item :index="route.path" :key="route.title" v-if='!route.hidden'>
          <i class="el-icon-menu"></i>
          <span slot="title">{{route.name}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import router from '@/router'
export default {
  data () {
    return {
      routers: []
    }
  },
  computed: {
    activeMenu () {
      const route = this.$route
      const { path } = route
      return path
    }
  },
  created () {
    this.routers = router.options.routes[0].children
  }
}
</script>
