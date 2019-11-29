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
        });
        qq.showShareMenu({
      showShareItems:  ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
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
                        that.setData({
                        avatar:res.data
                    });
                        app.globalData.ourUserInfo.avatarUrl=res.data;
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
    onUnload(){
        var pages = getCurrentPages();
        var prevPage = pages[pages.length - 2];
        prevPage.updateAvatar();
    }
});