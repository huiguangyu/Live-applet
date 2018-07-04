var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["聊天", "主播"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    height: 0,
    pop: false,
    danmuList: [
      {
        text: '这是我的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '小程序直播哦',
        color: '#ff00ff',
        time: 3
      }],
    commentList: [{
      name: '一直玫瑰花',
      info: '这是腾讯的直播吧'
    },
    {
      name: '一路信服',
      info: '是的吧'
    },
    {
      name: '我是一直廊',
      info: '我也是刚听说就来看看'
    },
    ]
  },
  onShareAppMessage: function (res) {
    return {
      title: '光辉直播',
      path: '/pages/live/live',
      success: function (res) {
        // 转发成功
        this.setData({
          pop: false
        })
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  onLoad: function () {
    var that = this;
    //分享
    wx.showShareMenu({
      withShareTicket: true
    })
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex,
          commentHeight: res.windowHeight - 400,
          height: res.windowHeight
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  pop() {
    this.setData({
      pop: true
    })
  },
  close() {
    this.setData({
      pop: false
    })
  },
  //举报
  report() {
    wx.navigateTo({
      url: '/pages/report/report',
    })
    this.setData({
      pop: false
    })
  },
  //发送弹幕
  send() {
    
  }
});