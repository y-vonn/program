//chatTop.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
      imgHead: app.globalData.url+"/image/",
      infos: []
  },
  onLoad: function(option){

      var getChatUserHandle = function(res) {
          this.setData({
              infos: res.data.users.map(dat => {
                  return {head: dat.headUrl, name: dat.name, id: dat.id, time: util.formatTime(new Date(dat.time)).split(" ")[1]}
                })
          })
        //   console.log(this.data.infos)
      }.bind(this)
      
      tt.request({
          url: "https://llxxtest.xyz/workTest/user/getChatUser?id=" +  app.globalData.testInfo,
          success(res){getChatUserHandle(res)}
      })

      tt.showShareMenu({
        showShareItems: null
      })
  },
  BindViewTap(e) {
    tt.navigateTo({
      url: '../chatPage/chatPage?id=' + e.currentTarget.dataset.id + "&name=" + e.currentTarget.dataset.name + "&head=" + e.currentTarget.dataset.head
    })
  },
  BindWatchTap(e) {
      tt.navigateTo({
      // url: '../otherPersonalHomepage/otherPersonalHomepage?id=' + e.currentTarget.dataset.id
      url: '../index/index'
    })
  }
})