// pages/dish/dish.js
var config = require('../../utils/config.js')
// 获取应用实例
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    host: config.host
  },


  // 请求数据
  requestData() {
    var that = this
    wx.request({
      url: 'http://a.itying.com/api/productlist',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        // 替换反斜杠

        var data = res.data.result
        for (var i = 0; i < data.length; i++) {
          for (var j = 0; j < data[i].list.length; j++) {
            data[i].list[j].img_url = data[i].list[j].img_url.replace(/\\/g, '/')
          }
        }
        console.log(data)
        that.setData({
          list: data
        })
      }
    })
  },

  goContent(e) {
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../dishcontent/dishcontent?id=' + id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 调用app.js全局方法
    app.getAppMsg()
    this.requestData()
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