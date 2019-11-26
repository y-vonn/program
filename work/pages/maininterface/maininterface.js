//maininterface.js
//获取应用实例
const app = getApp()

Page({
  data: {
      imgHead: app.globalData.url+"/image/",
      blocks: [{
        userId: 123123,
        headUrl: "",
        picUrl: "",
        name: "来自我是昵称",
        pst:1,
          
      }]
  },
  onLoad: function(option) {
    var that = this
    qq.request({
      url: "https://app.imoe.net.cn/user/selectByCondition",
      method: "POST",
      dataType: "json",
      data: {
        gender:1,
        school:"北京邮电大学",
        low:0,
        high:100
      },
      success(res){
        console.log(res)
        that.setData({
          blocks: res.data.map(info => {
            var photo = "" 
            if(info.photos){
              photo =  info.photos.split(",")[0]
            }
            else{
              photo = ""
            }
            return {userId: info.userId, headUrl: info.avatarUrl, picUrl: photo, name: info.nickname, pst:1}
          })
        })
      }
    })
  },
  Bindtapsl: function () {
    qq.navigateTo({
      url: '../select/select'
    })
  },
  Bindtapch: function (e) {
    console.log(e)
    qq.navigateTo({
      url: '../chatPage/chatPage?id=' + e.currentTarget.dataset.id + "&name=" + e.currentTarget.dataset.name + "&head=" + e.currentTarget.dataset.head
    })
  },
  BindTaphe: function (e) {
    console.log(e)
    qq.navigateTo({
      url: '../otherPersonalHomepage/otherPersonalHomepage?id=' + e.currentTarget.dataset.id
    })
  }
})