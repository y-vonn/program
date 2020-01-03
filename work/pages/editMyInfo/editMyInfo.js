const app = getApp();
Page({
    data:{
        userInfo:{},    
        count:[1,2,3,4,5,6,7,8],
        infoList:["ID","所在学校","昵称","出生日期","星座","年龄","性别","个性签名"],
        imageList:["../image/t.png","../image/t.png","../image/t.png","../image/t.png","../image/t.png","../image/t.png"],
        allStars:['白羊座','金牛座','双子座','巨蟹座','狮子座','处女座','天秤座','天蝎座','射手座','摩羯座','水瓶座','双鱼座',]
    },

    //通过获取的唯一id向后台提取用户信息，或者其他页面提取保存后，将信息保存为global取用
    onLoad(){
        this.init();
    },
    // 页面加载同步信息
    init:function(){
        this.setData({
            userInfo: app.globalData.ourUserInfo
        })
    },

    //用户修改了基本信息并更新到全局，将全局信息更新到本页
    changeInfomation:function(e){
        this.setData({
            userInfo:app.globalData.ourUserInfo
        })
    },

    nicknameInput:function(e){
        tt.navigateTo({
            url:"../editNickname/editNickname"
        })
    },

    birthdayInput:function(e){
        var year = new Date().getFullYear();
        var birth = parseInt(e.detail.value.slice(0,4));
        var a = year-birth;
        var user = this.data.userInfo;
        user.birthday = e.detail.value;
        user.age = a;
        this.setData({
            userInfo:user
        });
        app.globalData.ourUserInfo = user;
    },

    starInput:function(e){
        var user = this.data.userInfo;
        user.star = this.data.allStars[e.detail.value]
        this.setData({
            userInfo:user
        });
        app.globalData.ourUserInfo = user;
    },

    ageInput:function(e){
        var user = this.data.userInfo;
        user.age = e.detail.value;
        this.setData({
            userInfo:user
        });
        app.globalData.ourUserInfo = user;
    },

    personalSignInput:function(e){
        console.log("跳转");
        tt.navigateTo({
            url:"../personalSign/personalSign"
        })
    },

    // 当本页退出时，将调用前一页的方法，更新到后台和上一页
    onUnload(){
        var pages = getCurrentPages();
        var prevPage = pages[pages.length - 2];
        prevPage.updateInfo();
    }
});