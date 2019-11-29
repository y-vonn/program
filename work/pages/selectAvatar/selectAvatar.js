const app = getApp();
Page({
    data:{
        path:"",
        userInfo:{}
    },

    onLoad(){
        qq.showShareMenu({
      showShareItems:  ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
    })
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
            sizeType:['compressed'],
            sourceType: ['album', 'camera'],
            success:function(res){
                var avatar = res.tempFilePaths[0];
                var size = res.tempFiles[0].size;
                if(size<=3500000){
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
                        app.globalData.ourUserInfo.avatarUrl=res.data;
                        that.setData({
                        userInfo:user
                    });
                    }
                })
                }else{
                    qq.showToast({
                        title:'上传图片不能大于3.5M!',
                        icon:'none'
                    })
                }
                
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