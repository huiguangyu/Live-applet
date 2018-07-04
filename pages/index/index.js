const app = getApp();
Page({
  data: {
    width: 0,
    height: 0,
    imgUrls: [
      {
        id: '1',
        url: '/images/1.png',
        title: '神秘直播间'
      },
      {
        id: '2',
        url: '/images/2.png',
        title: '国服第一露娜'
      },
      {
        id: '3',
        url: '/images/3.png',
        title: '神仙姐姐'
      },
      {
        id: '4',
        url: '/images/4.png',
        title: '吃鸡吃鸡~'
      },
      {
        id: '5',
        url: '/images/5.png',
        title: '女装大佬了解下'
      },
      {
        id: '6',
        url: '/images/6.png',
        title: '国服大师局'
      }
    ],
    list: [
      {
        label: '热门直播',
        labelId: '10001',
        data: [
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
      {
        label: '推荐直播',
        labelId: '10001',
        data: [
          {
            url: '/images/5.png',
            title: '魔王张三胖',
            username: '琪琪',
            userId: '001',
            count: '4362'
          },
          {
            url: '/images/6.png',
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
      }
    ]
  },
  onLoad() {
    let self = this;
    wx.getSystemInfo({
      success: function (res) {
        let w = res.windowWidth;
        let h = res.windowHeight;
        app.globalData.width = w;
        app.globalData.height = h;
        self.setData({
          width: w,
          height: h
        })
      },
    })
  },
  detail() {
    wx.navigateTo({
      url: `/pages/detail/detail`,
    })
  },
  golive() {
    wx.navigateTo({
      url: `/pages/live/live`,
    })
  }
})