const app = getApp();

Page({
    data:{
        userInfo:{},
        path:"",
        gender:"",
        tags:[],
        photos:[]
    },
    // 传入他人id，后台数据更新本页面
    onLoad(option){
        qq.showShareMenu({
      showShareItems:  ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
    })
        var that = this;
        var userId = option.id;
        qq.request({
            url:"https://app.imoe.net.cn/user/getUser?userId="+userId,
            method:"GET",
            success(res){
                that.setData({
                    userInfo:res.data
                })
                //获取到信息后再修改本页信息
                that.change();
            }
        });
    },

    change:function(){
        var gender="";
        if(this.data.userInfo.gender==0){
            gender="女";
        }else{
            gender="男";
        }
        var tag = this.data.userInfo.tag.split(",");
        var tags =[];
        for(var i=0; i<tag.length;i++){
            if(tag[i]!=""){
                tags.push(tag[i]);
            }
        };
        var photos = this.data.userInfo.photos.split(",");
        this.setData({
            path: app.globalData.url+"/image/",
            gender: gender,
            tags:tags,
            photos:photos
        })
    },
    // 跳转
    chatToHim:function(){
        var that = this;
        qq.navigateTo({
            url:'../chatPage/chatPage?id=' + that.data.userInfo.userId + "&name=" + that.data.userInfo.nickname + "&head=" + that.data.userInfo.avatarUrl
        })
    }
});