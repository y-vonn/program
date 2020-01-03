const app = getApp();
Page({
    data:{
        num:0,
        tips:"输入你的昵称，昵称不能为空。",
        newNickname:"",
        userInfo:{}
    },
    onLoad(){
        this.setData({
            userInfo:app.globalData.ourUserInfo
        })
    },
    
    textNumber:function(e){
        var value = e.detail.value;
        var len = parseInt(value.length);
        if(len==0){
            this.setData({
                num:0,
                tips:"输入你的昵称，昵称不能为空。"
            })
        }else if(len>0){
            this.setData({
                num:len,
                tips:"",
                newNickname:value
            })
        }
    },

    changeName:function(){
        var user = this.data.userInfo;
        user.nickname = this.data.newNickname;
        this.setData({
            userInfo:user
        })
        app.globalData.ourUserInfo=user;
        tt.navigateBack();
    },
    onUnload(){
        var pages = getCurrentPages();
        var prevPage = pages[pages.length - 2];
        prevPage.changeInfomation();
    }
});