Page({
  data: {
    picId: '',
    reportLabel: '',
    content: '',
    tel: '',
    label: [
      {
        title: '盗版侵权',
        status: false
      },
      {
        title: '色情暴力',
        status: false
      },
      {
        title: '涉及政治',
        status: false
      },
      {
        title: '其他相关',
        status: false
      }
    ],
    height: 0,
  },
  onLoad: function (option) {
    let self = this;
    wx.getSystemInfo({
      success: function (res) {
        self.setData({
          height: res.windowHeight
        })
      },
    });
  },

  reportLabel: function (e) {
    var index = e.currentTarget.dataset.index,
      label = this.data.label,
      title = e.currentTarget.dataset.label,
      status = e.currentTarget.dataset.status;
    for (let i of label) {
      i.status = false;
    }
    if (status === false) {
      label[index].status = true;
      title = title;

    } else {
      label[index].status = false;
      title = ''
    }
    this.setData({
      label: label,
      reportLabel: title
    })
  },
  //举报原因
  reportContent: function (e) {
    var content = e.detail.value;
    this.setData({
      content: content
    })
  },

  //提交
  commit: function () {
  
  }
})