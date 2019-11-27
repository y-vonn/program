const app = getApp();
Page({
    data:{
        path:"",
        avatar:""
    },

    onLoad(){
        this.setData({
            path: app.globalData.url+"/image/",
            avatar: app.globalData.ourUserInfo.avatarUrl
        })
    },
    picSelect:function(e){
        var that = this;
        qq.chooseImage({
            count:1,
            sizeType:['original','compressed'],
            sourceType: ['album', 'camera'],
            success:function(res){
                var avatar = res.tempFilePaths[0];
                var size = avatar.size;
                if(size<=2000000){
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
                }else{
                    qq.showToast({
                        title:'上传图片不能大于2M!',
                        icon:'none'
                    })
                }
                
            },
            fail: function(res){
                console.log(res)
            }
        })
    },
    onUnload(){
        var pages = getCurrentPages();
        var prevPage = pages[pages.length - 2];
        prevPage.updateAvatar();
    }
});