Page({
  data: {
    height: 0,
    value: ''
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
  feedback(e) {
    let value = e.detail.value;
    this.setData({
      value: value
    })
  },
  submit() {
    let value = this.data.value;
  }
})