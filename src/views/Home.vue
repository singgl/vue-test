<style lang="less" scoped>

</style>

<template>
  <div class="home" :style="scollHeight">
    <fm-making-form
      ref="makingform"
      preview
      generate-code
      generate-json
    >
    <template slot="action"></template>
  </fm-making-form>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      url: '../utils/ace.js'
    }
  },
  components: {

  },
  computed: {
    scollHeight () {
      return `height: calc(100vh - 60px)`
    }
  },
  created () {
    // let script = document.createElement('script')
    // script.type = 'text/javascript'
    // script.src = this.url
    // document.getElementsByTagName('head')[0].appendChild(script)
  },
  activated () {
    console.log('缓存')
  },
  deactivated () {
    console.log('离开')
  },
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    console.log(to, '1111')
    console.log(from)
    next()
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log(to, '2222')
    console.log(from)
    next()
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log(to, '3333')
    console.log(from)
    next()
  },
  methods: {
    getJSON (e) {
      console.log(e)
    },
    getHtml (e) {
      console.log(e)
    },
    setJSON (e) {
      console.log(e)
    }
  }
}
</script>
