//chatPage.js
//获取应用实例
const app = getApp()

Page({
    data: {
      name: "11", 
      user: "12",
      toUser: "",
      toUserHead: "",
      infos: [],
      scrollTop: 999
  },
  onLoad: function(option) {
      console.log(option)
      var that = this
      
      this.setData({
          name: option.name,
          user: app.globalData.ourUserInfo.userId,
          toUser: option.id,
          toUserHead: app.globalData.url+"/image/"+option.head
      })

      qq.setNavigationBarTitle({
          title: that.data.name 
      })

      var getUserChatData = function(res) {
          console.log(res.data)
          this.setData({
              infos: res.data.users.map(info =>{
                  return {isOwner: info.isOwner, content: info.text}
              })
          })
      }.bind(this)

      qq.request({
          url: "https://llxxtest.xyz/workTest/user/getChatUserData?userId=" + app.globalData.ourUserInfo.userId + "&targetId=" + option.id,
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
          if(this.data.user == msgId){
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
          url: 'wss://app.imoe.net.cn/workTest/chatJoin?id=' + app.globalData.ourUserInfo.userId,
      })
      qq.onSocketOpen(onSocketOpenHandle)
      qq.onSocketMessage(onSocketMessageHandle)
  },
  formSubmit(e) {
    console.log("send msg " + this.data.user + "%%##%%" + this.data.toUser + "%%##%%" + e.detail.value.text)
    qq.sendSocketMessage({
        data: this.data.user + "%%##%%" + this.data.toUser + "%%##%%" + e.detail.value.text
    })
  },
  bindViewTap: function () {
      var text = document.getElementById("chat-input-text").value
      if(text.nonEmpty){
          console.log(text)
      }
  },
})