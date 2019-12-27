// pages/demo2/demo2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '你好'
  },
  // 下面是一个方法
  print() {
    console.log('打印方法')
  },
  getMsg() {
    console.log('msg的值是' + this.data.msg)
  },
  setMsg() {
    // 改变msg里面的值
    this.setData({
      msg: '我被改变了'
    })
    console.log('msg的值是' + this.data.msg)
  },
  printEvent(e) {
    // 主要用来获取自定义属性的值
    console.log(e)
    console.log(e.currentTarget.dataset.name)
  },

  // 小程序内执行方法传值
  printData(e) {
    console.log(e.currentTarget.dataset.param)
  },

// 页面跳转
  goTo(){
    wx.navigateTo({
      url: '../index/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 页面加载完毕就会触发
    // this.print()
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