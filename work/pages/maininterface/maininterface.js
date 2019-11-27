//maininterface.js
//获取应用实例
const app = getApp()

Page({
  data: {
      blocks: [{
          name: "来自我是昵称",
          pst:1,
          
      },{
          name: "来自我是昵称",
          pst:1,
          
      }]
  },
  Bindtapsl: function () {
    qq.navigateTo({
      url: '../select/select'
    })
  },
})