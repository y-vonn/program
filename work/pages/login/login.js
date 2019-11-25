const app = getApp();
Page({
    data:{
        userInfo:{},
        show:false,
        path:""
    },

    onLoad(){
        var that = this;
        app.userLogin().then(function(res){
            if(res.status==200){
                that.getUserInfo();
            }
        })
    },

    getUserInfo:function(){
        var code = app.globalData.code;
        var that = this;
        console.log(code);
        qq.request({
            url:"https://app.imoe.net.cn/user/addOrGetUser?code="+code,
            success:function(res){
                app.globalData.ourUserInfo=res.data;
                // 拿到用户信息后再显示登录按钮
                that.setData({
                    userInfo:res.data,
                    path: app.globalData.url+"/image/",
                    show:true
                })
            },
            fail:function(){
                console.log("fail");
            }
        })
    },
    login:function(){
        console.log(app.globalData.ourUserInfo);
        if(this.data.userInfo.school==""){
            qq.redirectTo({
                url:"../inputAgeAndGender/inputAgeAndGender"
            })
        }else{
            qq.switchTab({
                url:"../myPersonalHomepage/myPersonalHomepage"
            })
        }
    }
});