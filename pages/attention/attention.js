Page({
  data: {
    height: 0
  },
  onLoad() {
    let self = this;
    wx.getSystemInfo({
      success: function (res) {
        self.setData({
          height: res.windowHeight
        })
      },
    })
  },
  detail() {
    wx.navigateTo({
      url: '/pages/live/live',
    })
  }
})