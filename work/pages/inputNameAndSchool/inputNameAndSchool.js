const app = getApp();

Page({
    data:{
        canJump:false,
        nickname:"",
        school:"",
        userId:""
    },

    onLoad(){
        this.setData({
            userId:app.globalData.ourUserInfo.userId
        })
    },

    jump:function(){
        console.log(app.globalData.ourUserInfo);
        qq.navigateTo({
            url:"../selectAvatar/selectAvatar"
        })
        qq.request({
            url: app.globalData.url+"/updateSchool?userId="+this.data.userId+"&school="+this.data.school,
            method: "POST"
        });
        qq.request({
            url: app.globalData.url+"/updateNickname?userId="+this.data.userId+"&nickname="+this.data.nickname,
            method: "POST"
        });
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