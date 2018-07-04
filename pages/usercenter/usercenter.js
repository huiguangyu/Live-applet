let app = getApp();

Page({
  data: {
    height: 0,
    imgUrl: '/images/3.png'
  },
  onLoad(){
    let self = this;
    wx.getSystemInfo({
      success: function(res) {
        app.globalData.height = res.windowHeight;
        self.setData({
          height: res.windowHeight
        })
      },
    })
  },
  change() {
    let self = this;
    wx.chooseImage({
      count: 1,
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        self.setData({
          imgUrl: tempFilePaths
        })
        wx.showToast({
          title: '更换成功',
        })
        setTimeout(() => {
          wx.hideLoading();
        }, 1000)
      }
    })
  },
  //编辑通告
  edit() {
    wx.navigateTo({
      url: '/pages/edit/edit',
    })
  },
  //支付
  pay() {
    let date = new Date().getTime().toString();
    wx.requestPayment(
      {
        'timeStamp': date,
        'nonceStr': '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',//随机字符串
        'package': 'prepay_id=wx2017033010242291fcfe0db70013231072',
        'signType': 'MD5',
        'paySign': 'MD5(appId=wxd678efh567hg6787&nonceStr=5K8264ILTKCH16CQ2502SI8ZNMTM67VS&package=prepay_id=wx2017033010242291fcfe0db70013231072&signType=MD5&timeStamp=1490840662&key=qazwsxedcrfvtgbyhnujmikolp111111) = 22D9B4E54AB1950F51E0649E8810ACD6',
        'success': function (res) {
          console.log(res.data)
        },
        'fail': function (res) { },
        'complete': function (res) { }
      })
  },
  //设置
  set() {
    wx.navigateTo({
      url: '/pages/set/set',
    })
  },
  //认证
  authentication() {
    wx.navigateTo({
      url: '/pages/authentication/authentication',
    })
  }
})