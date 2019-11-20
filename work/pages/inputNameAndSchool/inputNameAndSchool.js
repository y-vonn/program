const app = getApp();

Page({
    data:{
        canJump:false,
        nickname:"",
        school:""
    },

    jump:function(){
        console.log(app.globalData.ourUserInfo);
        qq.navigateTo({
            url:"../selectAvatar/selectAvatar"
        })
    },
    nameInput:function(e){
        var name = e.detail.value;
        var can = false;
        if(name.length>0&&this.data.school!=""){
            can = true;
        }
        this.setData({
            canJump:can,
            nickname:name
        })
        app.globalData.ourUserInfo.nickname = name;
    },
    schoolInput:function(e){
        var scl = e.detail.value;
        var can = false;
        if(scl.length>0&&this.data.nickname!=""){
            can = true;
        }
        this.setData({
            canJump:can,
            school:scl
        })
        app.globalData.ourUserInfo.school = scl;
    }
});