App({
  onLaunch: function () {
    var that = this;
    // this.userLogin();
  },

  userLogin:function(){ 
    var that = this;
    return new Promise(function(reslove, reject){
      tt.login({
      success: res => {
        if(res.code){
          that.globalData.code = res.code;
          console.log(res.code);
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
    url:"https://llxxtest.xyz/user",
    testInfo: 10001
  }
})
