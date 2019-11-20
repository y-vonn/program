const app = getApp();
Page({
    data:{
        userInfo:{}
    },

    onLoad(){
        this.getUserInfo();
    },

    getUserInfo:function(){
        var code = app.globalData.code;
        var that = this;
        qq.request({
            url:"http://127.0.0.1:8080/addOrGetUser?code="+code,
            success:function(res){
                app.globalData.ourUserInfo=res.data;
                that.setData({
                    userInfo:res.data
                })
            },
            fail:function(){
                console.log("fail");
            }
        })
        console.log(this.data.userInfo);
    },
    login:function(){
        console.log(this.data.userInfo);
        if(this.data.userInfo.school==""){
            qq.redirectTo({
                url:"../inputAgeAndGender/inputAgeAndGender"
            })
        }
    }
});