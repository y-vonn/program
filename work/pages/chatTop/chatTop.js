//chatTop.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')

function switch2Page() {
    document.getElementById
}

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
      
      qq.request({
          url: "https://app.imoe.net.cn/workTest/user/getChatUser?id=" +  app.globalData.ourUserInfo.userId,
          success(res){getChatUserHandle(res)}
      })

      qq.showShareMenu({
      showShareItems:  ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
    })
  },
  BindViewTap(e) {
    qq.navigateTo({
      url: '../chatPage/chatPage?id=' + e.currentTarget.dataset.id + "&name=" + e.currentTarget.dataset.name + "&head=" + e.currentTarget.dataset.head
    })
  },
  BindWatchTap(e) {
      qq.navigateTo({
      url: '../otherPersonalHomepage/otherPersonalHomepage?id=' + e.currentTarget.dataset.id
    })
  }
})