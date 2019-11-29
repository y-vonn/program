//animation.js
//获取应用实例
const app = getApp()

Page({
  onLoad(){
    qq.showShareMenu({
      showShareItems:  ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
    })
  },
  bindani: function () {
    qq.reLaunch({
        url: '../login/login'
    })
  },
})