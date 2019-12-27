// components/header/header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '默认值'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    msg: '头部组件数据',
    msg2: '这段字符串是子组件传给父组件的'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    run() {
      console.log('子组件方法被触发了' + this.data.msg)
      // 设置数据
      this.setData({
        msg: '改变后的数据'
      })
      console.log(this.data.msg)
    },
    run2() {
      console.log('我是父组件调用子组件方法时所打印的')
    },
    run3() {
      return this.data.msg2
    }
  }
})