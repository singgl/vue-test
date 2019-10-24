<style lang="less" scoped>
  .container{
    .el-container{
      width: 100vw;
      height: 100vh;
      .el-main{
        padding: 0;
      }
    }
  }
</style>

<template>
  <div class="container">
    <el-container>
      <Aside />
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <el-scrollbar>
            <keep-alive :include="menuview">
              <router-view/>
            </keep-alive>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from './Aside'
export default {
  data () {
    return {
      menuview: ['home']
    }
  },
  components: {
    Aside
  },
  computnd: {
    key () {
      console.log(this.$route)
    }
  }
}
</script>
