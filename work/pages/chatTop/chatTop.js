//chatTop.js
//获取应用实例
const app = getApp()

function switch2Page() {
    document.getElementById
}

Page({
  data: {
      infos: []
  },
  onLoad: function(option){

      var getChatUserHandle = function(res) {
          this.setData({
              infos: res.data.users.map(id => {
                  return {head: "test/test.png", name: id, id: id}
              })
          })
          console.log(this.data.infos)
      }.bind(this)
      
      qq.request({
          url: "https://app.imoe.net.cn/workTest/user/getChatUser?id=" +  app.globalData.testInfo,
          success(res){getChatUserHandle(res)}
      })
  },
  bindViewTap(e) {
    qq.navigateTo({
      url: '../chatPage/chatPage?name=' + e.currentTarget.dataset.id
    })
  },
})