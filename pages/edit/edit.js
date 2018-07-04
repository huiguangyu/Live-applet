Page({
  data:{
    value:''
  },
  notice(e) {
    let value = e.detail.value;
    this.setData({
      value: value
    })
  },
  submit() {
    let value = this.data.value;
    wx.setStorage({
      key: 'notice',
      data: value,
    })
    //Todo接口
  }
}) 