// pages/demo5/demo5.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '我是数据，用于父子组件传值'
  },

  runChildFn() {
    //调用header子组件的方法
    var header = this.selectComponent('#header')
    header.run2()
  },

  runChildFn2() {
    //调用header子组件的数据
    var header = this.selectComponent('#header')
    console.log(header.run3())
  },

  fatherFn(e) {
    console.log('我是在子组件调用父组件方法时所打印的')
    console.log(e.detail)
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})