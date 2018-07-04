Page({
  data:{
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
  //信息
  userinfo() {
    wx.navigateTo({
      url: '/pages/userinfo/userinfo',
    })
  },
  //反馈
  feedback() {
    wx.navigateTo({
      url: '/pages/feedback/feedback',
    })
  },
  //关于我们
  about() {
    wx.navigateTo({
      url: '/pages/abount/abount',
    })
  },
  notice() {
    wx.navigateTo({
      url: '/pages/notice/notice',
    })
  }
})