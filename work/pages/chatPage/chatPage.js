//chatPage.js
//获取应用实例
const app = getApp()

Page({
    data: {
      user: -1,
      toUser: -1,
      infos: [],
      scrollTop: 999
  },
  onLoad: function(option) {
      this.setData({
          user: app.globalData.testInfo,
          toUser: option.name
      })

      var getUserChatData = function(res) {
          console.log(res.data)
          this.setData({
              infos: res.data.users.map(info =>{
                  return {isOwner: true, content: info.text}
              })
          })
      }.bind(this)

      qq.request({
          url: "https://app.imoe.net.cn/workTest/user/getChatUserData?userId=" + app.globalData.testInfo + "&targetId=" + option.name,
          success(res){getUserChatData(res)}
      })


  },
  onReady: function () {

      var onSocketOpenHandle =  function(res) {
          console.log('open success')
      }.bind(this)
      var onSocketMessageHandle =  function(msg) {
          console.log("get msg:" + msg.data)
          if(msg.data.split("%%##%%")[0] == this.data.user || msg.data.split("%%##%%")[0] == this.data.toUser){
          var text = msg.data.split("%%##%%")[1]
          var msgId = msg.data.split("%%##%%")[0]
          var owner = true
          if(app.globalData.testInfo == msgId){
              owner = true
          }
          else{
              owner = false
          }
          this.data.infos.push({isOwner: owner, content: text})
          this.setData(
              {infos: this.data.infos},
              function() {this.setData({scrollTop: 999})}
          )
        }
      }.bind(this)

      qq.connectSocket({
          url: 'wss://app.imoe.net.cn/workTest/chatJoin?id=' + app.globalData.testInfo,
      })
      qq.onSocketOpen(onSocketOpenHandle)
      qq.onSocketMessage(onSocketMessageHandle)
  },
  formSubmit(e) {
    console.log("send msg " + app.globalData.testInfo + "%%##%%10002%%##%%" + e.detail.value.text)
    qq.sendSocketMessage({
        data: app.globalData.testInfo + "%%##%%10002%%##%%" + e.detail.value.text
    })
  },
  bindViewTap: function () {
      var text = document.getElementById("chat-input-text").value
      if(text.nonEmpty){
          console.log(text)
      }
  },
})