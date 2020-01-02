//animation.js
//获取应用实例
const app = getApp()

Page({
  
  onLoad(){
    tt.showShareMenu({
      showShareItems: null
    })
  },
  bindani: function () {
    tt.reLaunch({
        url: '../login/login'
    })
  },
})