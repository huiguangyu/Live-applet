Page({
  data:{
    list:[
      {
        id:'1',
        activityPicture:'/images/a1.png',
        title:'梦想棋牌',
        host:'入围前十强',
        sponsor:'光辉直播'
      },
      {
        id: '2',
        activityPicture: '/images/a2.png',
        title: '吃鸡大赛',
        host: "'鸡王'争霸",
        sponsor: 'MIS联赛'
      },
      {
        id: '3',
        activityPicture: '/images/a3.png',
        title: '英雄联盟季中冠军赛',
        host: 'MIS赛',
        sponsor: '拳头'
      }
    ]
  },
  detail() {
    wx.navigateTo({
      url: `/pages/activeDetail/activeDetail`,
    })
  }
})