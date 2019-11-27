const app = getApp();
Page({
    data:{
        path:"",
        userInfo:{}
    },

    onLoad(){
        app.globalData.ourUserInfo.avatarUrl="avatar.png";
        this.setData({
            userInfo:app.globalData.ourUserInfo,
            path:app.globalData.url+"/image/"
        })
    },

    changeAvatar:function(){
        var that = this;
        // 未知问题：只能拍照不能从本地相册获取
        qq.chooseImage({
            count:1,
            sizeType:['original','compressed'],
            sourceType: ['album', 'camera'],
            success:function(res){
                var avatar = res.tempFilePaths[0];
                qq.uploadFile({
                    url:app.globalData.url+"/uploadImage",
                    filePath: avatar,
                    name: 'file',
                    formData:{
                        preName: avatar
                    },
                    success:function(res){
                        console.log(res);
                        var user = that.data.userInfo;
                        user.avatarUrl = res.data;
                        that.setData({
                        userInfo:user
                    });
                    }
                })
            },
            fail: function(res){
                console.log(res)
            }
        })
    },

    // 继续填写信息，跳转
    jump:function(){
        qq.switchTab({
            url:"../myPersonalHomepage/myPersonalHomepage"
        })
        qq.request({
            url: app.globalData.url+"/updateAvatarUrl?userId="+this.data.userInfo.userId+"&avatarUrl="+this.data.userInfo.avatarUrl,
            method: "POST"
        });
    }
});