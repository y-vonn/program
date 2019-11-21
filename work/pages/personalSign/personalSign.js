const app = getApp();
Page({
    data:{
        userInfo:{},
        sign:""
    },
    onLoad(){
        this.setData({
            userInfo: app.globalData.ourUserInfo
        })
    },
    inputSign:function(e){
        var input = e.detail.value;
        var len = parseInt(input.length);
        if(len==0){
            this.setData({
                num:0
            })
        }else{
            this.setData({
                num:len,
                sign:input
            })
        }
    },
    changeName:function(){
        var user = this.data.userInfo;
        user.personalSign = this.data.sign;
        this.setData({
            userInfo:user
        })
        app.globalData.ourUserInfo = user;
        qq.navigateBack();
    },
    onUnload(){
        var pages = getCurrentPages();
        var prevPage = pages[pages.length - 2];
        prevPage.changeInfomation();
    }
});