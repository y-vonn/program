var app = getApp();

Page({
    data:{
        userInfo:{},
        path:"",
        photos:[],
        tags:[]
    },
    onLoad(){
        
        var p = app.globalData.ourUserInfo.photos;
        var ps = p.split(",");
        var photo = [];
        var t = 0;
        var tag = app.globalData.ourUserInfo.tag.split(",");
        var tags =[];
        for(var i=0; i<6;i++){
            if(i<ps.length&&p!=""){
                photo.push(ps[i]);
                t = ps.length;
            }else{
                photo.push("t.png");
            }
        }
        for(var i=0; i<tag.length;i++){
            if(tag[i]!=""){
                tags.push(tag[i]);
            }
        }
        this.setData({
            userInfo:app.globalData.ourUserInfo,
            path:app.globalData.url+"/image/",
            photos:photo,
            tags:tags
        });
         qq.showShareMenu({
            showShareItems:  ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
        })
    },
    editInfo:function(e){
        qq.navigateTo({
            url:"../editMyInfo/editMyInfo",
        })
    },
    addTags:function(e){
        qq.navigateTo({
            url:"../addTags/addTags"
        })
    },
    changeAvatar:function(){
        qq.navigateTo({
            url:"../changeAvatar/changeAvatar"
        })
    },
    imageSelect:function(e){
         var that = this;
         var i = e.currentTarget.dataset.i;
        // 未知问题：ios只能拍照不能从本地相册获取
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
                        that.addImage(res.data, i);
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
    addImage:function(name, index){
        var p = this.data.photos;
        if(p[index]==="t.png"){
            for(var i=0;i<6;i++){
                if(p[i]==="t.png"){
                    p[i]=name;
                    break;
                }
            }
        }else{
            p[index]=name;
        }
        var photo = p.join(",");
        var usr = this.data.userInfo;
        usr.photos = photo;
        app.globalData.ourUserInfo = usr;
         qq.request({
            url: app.globalData.url+"/updatePhotosById?userId="+this.data.userInfo.userId+"&photos="+photo,
            method: "POST"
        });
        this.setData({
            photos: p,
            userInfo: usr
        })
    },

    // 由修改信息页返回时，将全局信息更新到本页，并更新到后台
    updateInfo:function(){
        this.setData({
            userInfo:app.globalData.ourUserInfo
        })
        qq.request({
            url:app.globalData.url+"/updateBasicInfo",
            data: app.globalData.ourUserInfo,
            method:"POST"
        })
    },
    updateTag:function(){
        var tag = app.globalData.ourUserInfo.tag.split(",");
        var tags =[];
        for(var i=0; i<tag.length;i++){
            if(tag[i]!=""){
                tags.push(tag[i]);
            }
        };
        this.setData({
            tags:tags
        })
        qq.request({
            url: app.globalData.url+"/updateTagById?userId="+app.globalData.ourUserInfo.userId+"&tag="+tags.join(","),
            method:"POST"
        })
    },
    updateAvatar:function(){
        this.setData({
            userInfo:app.globalData.ourUserInfo
        })
        qq.request({
            url: app.globalData.url+"/updateAvatarUrl?userId="+app.globalData.ourUserInfo.userId+"&avatarUrl="+this.data.userInfo.avatarUrl,
            method:"POST"
        })
    }
});