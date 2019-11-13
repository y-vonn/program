//chatTop.js
//获取应用实例
const app = getApp()

Page({
  data: {
      infos: [{
          head: "test/test.png",
          name: "haha"
      },{
          head: "test/test.png",
          name: "good"
      },{
          head: "test/test.png",
          name: "hello"
      }]
  },
  bindViewTap: function () {
    qq.navigateTo({
      url: '../chatPage/chatPage'
    })
  },
})