<style lang="less" scoped>
  .login{
    .form{
      width: 400px;
      height: 350px;
      background-color: #60acb9;
      margin: 0 auto;
      position: absolute;
      left:50%;
      top:50%;
      transform: translate(-50%, -50%);
      border-radius: 5px;
      .login-box {
        padding: 35px 35px 15px 35px;
        .login-title {
          text-align: center;
          margin: 0 auto 40px auto;
          color: #ffffff;
        }
      }
    }
  }
</style>

<template>
  <div class='login'>
    <div id="canvas"></div>
    <div class='form'>
      <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
        <h3 class="login-title">欢迎登录</h3>
        <el-form-item label="账号" prop="username">
          <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('loginForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </el-form>

      <el-dialog
        title="温馨提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>请输入账号和密码</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import canvasInit from '@/utils/canvas-particle.js'
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '账号不可为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不可为空', trigger: 'blur' }
        ]
      },

      // 对话框显示和隐藏
      dialogVisible: false
    }
  },
  mounted () {
    var body = document.getElementById('canvas')
    var config = {
      // 小球x轴速度,正为右，负为左
      vx: 4,
      // 小球y轴速度
      vy: 4,
      // 小球高宽，其实为正方形，所以不宜太大
      height: 2,
      width: 2,
      // 点个数
      count: 500,
      // 点颜色
      color: '248 248 255',
      // 线条颜色
      stroke: '220,220,250',
      // 点吸附距离
      dist: 8000,
      // 鼠标吸附加速距离
      e_dist: 20000,
      // 点到点最大连接数
      max_conn: 15
    }
    canvasInit(config, body)
  },
  methods: {
    onSubmit (formName) {
      // 为表单绑定验证功能
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
          this.$router.push('/main')
        } else {
          this.dialogVisible = true
          return false
        }
      })
    },
    resetForm () {

    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>
