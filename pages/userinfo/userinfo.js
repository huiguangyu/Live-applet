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
  change(e){
    let value = e.detail.value;
    this.setData({
      value: value
    })
  },
  name(event) {
    let value = this.data.value;
    console.log(value)
  }
})