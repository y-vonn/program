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
                qq.uploadFile({
                    url:app.globalData.url+"/uploadImage",
                    filePath: avatar,
                    name: 'file',
                    formData:{
                        preName: avatar
                    },
                    success:function(res){
                        that.setData({
                            avatar: res.data
                        })
                        app.globalData.ourUserInfo.avatarUrl = res.data;
                    }
                })
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