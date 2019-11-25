//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = qq.getStorageSync('logs') || []
    logs.unshift(Date.now())
    qq.setStorageSync('logs', logs)
    var that = this;
    this.userLogin();
  },

  userLogin:function(){ 
    var that = this;
    return new Promise(function(reslove, reject){
      qq.login({
      success: res => {
        if(res.code){
          that.globalData.code = res.code;
          var res ={
            status: 200,
            data:"success"
          }
          reslove(res);
        }else{
          var res={
            status: 300,
            data:"error"
          }
          reject("error");
        }
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    })
  },
  globalData: {
    code:null,
    userInfo: null,
    ourUserInfo: null,
<<<<<<< HEAD
    url:"https://app.imoe.net.cn/user"
=======
    url:"http://127.0.0.1:8080",
    testInfo: 10001
>>>>>>> 3dd56c6517b2450abbb34c8b4b0e0bea048e8be8
  }
})
