const app = getApp();
Page({
  data: {
    height: 0,
    list: [
      {
        url: '/images/1.png',
        title: '魔王张三胖',
        username: '琪琪',
        userId: '001',
        count: '4362'
      },
      {
        url: '/images/2.png',
        title: '国服第一露娜',
        username: '露娜',
        userId: '002',
        count: '1.2w'
      },
      {
        url: '/images/3.png',
        title: '神仙姐姐',
        username: '神仙姐姐',
        userId: '003',
        count: '4362'
      },
      {
        url: '/images/4.png',
        title: '指尖艺术',
        username: '张三丰',
        userId: '004',
        count: '20w'
      }
    ]
  },
  onLoad() {
    let self = this;
    wx.getSystemInfo({
      success: function(res) {
        self.setData({
          height: res.windowHeight
        })
      },
    })
  },
  golive() {
    wx.navigateTo({
      url: `/pages/live/live`,
    })
  }
})