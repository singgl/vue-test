<style lang='less' scoped>

</style>

<template>
  <div class='about'>
    <form-create ref="fc" v-model="fApi" :rule="rule" :option="option" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 表单实例对象 $f
      fApi: {},
      // 表单生成规则
      rule: mock(),
      option: {
        // 显示表单重置按钮
        resetBtn: true,
        form: {
          labelPosition: 'right',
          labelWidth: '150px',
          hideRequiredAsterisk: false
        },
        row: {
          gutter: 20
        },
        onSubmit: function (formData) {
          alert(JSON.stringify(formData))
        }
      }
    }
  },
  watch: {
    'formData.address': {
      handler: function (n) {
        console.log(n)
      },
      deep: true
    }
  },
  mounted: function () {
    this.fApi.setValue({'code':'fdsfdsfd'})
    console.log(this.fApi.formData())
    console.log(window.province_city_area)
  },
  methods: {
    // onSubmit (formData) {
    //   console.log(formData, '提交')
    // },
    // change: function (...arg) {
    //   console.log(arg)
    // }
  }
}
function mock () {
  return [
    {
      type: 'hidden',
      field: 'id',
      value: '14'
    },
    {
      type: 'input',
      title: '单据编号',
      field: 'code',
      value: '',
      col: {
        span: 7
      },
      props: {
        'type': 'text',
        disabled: true,
        placeholder: '编码由编码规则自动生成'
      }
    },
    {
      type: 'DatePicker',
      field: 'dataTime',
      title: '出库日期',
      value: '',
      col: {
        span: 7
      },
      props: {
        'type': 'datetime',
        'format': 'yyyy-MM-dd HH:mm:ss',
        'placeholder': '请选择日期'
      }
    },
    {
      type: 'input',
      title: '单据状态',
      field: 'staus',
      value: '暂存',
      col: {
        span: 7
      },
      props: {
        'type': 'text',
        disabled: true,
        placeholder: ''
      }
    },
    {
      type: 'input',
      title: '单据类型',
      field: 'Dtype',
      value: '',
      col: {
        span: 7,
        labelWidth: '150px'
      },
      props: {
        'type': 'text',
        placeholder: '请输入单据类型',
        suffixIcon: 'el-icon-search'
      }
    },
    {
      type: 'input',
      title: '业务类型',
      field: 'Ytype',
      value: '',
      col: {
        span: 7,
        labelWidth: '150px'
      },
      props: {
        'type': 'text',
        placeholder: ''
      }
    },
    {
      type: 'input',
      title: '供货渠道',
      field: 'Gtype',
      value: '',
      col: {
        span: 7,
        labelWidth: '150px'
      },
      props: {
        'type': 'text',
        placeholder: '',
        disabled: true
      }
    }
  ]
}
</script>
