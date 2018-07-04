Page({
  agreement(){
    wx.navigateTo({
      url: '/pages/notice/notice',
    })
  },
  validate() {
    wx.navigateTo({
      url: '/pages/validate/validate',
    })
  }
})