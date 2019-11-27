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
    console.log(option)
    var that = this
    if(option.sex){
      qq.request({
        url: "https://app.imoe.net.cn/user/selectByCondition",
        method: "POST",
        dataType: "json",
        data: {
          gender: option.sex,
          school: option.school,
          low: option.low,
          high: option.high
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
    }
    else{
      qq.request({
        url: "https://app.imoe.net.cn/user/selectByCondition",
        method: "POST",
        dataType: "json",
        data: {
          gender: 2,
          school: "",
          low: 0,
          high: 100
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
    }
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