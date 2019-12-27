// pages/demo6/demo6.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    widowHeight: '400',
    page: 1,
    isFinished: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    // 获取并设置屏幕高度
    wx.getSystemInfo({
      success: function(res) {
        that.data.widowHeight = that.setData({
          widowHeight: res.windowHeight
        })
      },
    })
    this.requestData()
  },
  requestData() {
    if (!this.data.isFinished) return
    this.setData({
      isFinished: false
    })
    var that = this
    var api = 'http://www.phonegap100.com/appapi.php'
    wx.request({
      url: api, //仅为示例，并非真实的接口地址
      data: {
        a: 'getPortalList',
        catid: '20',
        page: that.data.page
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        var newPage = that.data.page++;
        var newList = that.data.list.concat(res.data.result)
        that.setData({
          list: newList,
          page: newPage,
          isFinished: true
        })
      }
    })
  },
  loadMore() {
    this.requestData()
  }

})