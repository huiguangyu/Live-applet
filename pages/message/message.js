Page({
  data: {
    height: 0,
    list:[
      {
        id:'21312-1231',
        avatar: '/images/5.png',
        name:'光辉直播',
        status: true,
        message:'今日更新,体验新功能',
        time:'2017-05-28'
      }
    ]
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
  messageDetail() {
    wx.navigateTo({
      url: `/pages/messageDetail/messageDetail`,
    })
  }
})