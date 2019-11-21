const app = getApp();
Page({
    data:{
        userInfo:{
            avatarUrl: "../image/avatar.png"
        }
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
                        user.avatarUrl = app.globalData.url+"/image/"+res.data;
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
        qq.navigateTo({
            url:"../myPersonalHomepage/myPersonalHomepage"
        })
        qq.request({
            url: app.globalData.url+"/updateAvatarUrl?usrId="+this.userId+"&avatarUrl="+this.avatarUrl,
            method: "POST"
        });
    }
});