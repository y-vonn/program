const app = getApp();
Page({
    data:{
        userInfo:{},    
        count:[1,2,3,4,5,6,7],
        infoList:["ID","所在学校","昵称","出生日期","星座","年龄","个性签名"],
        imageList:["../image/t.png","../image/t.png","../image/t.png","../image/t.png","../image/t.png","../image/t.png"],
        allStars:['白羊座','金牛座','双子座','巨蟹座','狮子座','处女座','天秤座','天蝎座','射手座','摩羯座','水瓶座','双鱼座',]
    },

    //通过获取的唯一id向后台提取用户信息，或者其他页面提取保存后，将信息保存为global取用
    onLoad(){
        this.init();
        console.log(app.globalData);
    },
    // 页面加载同步信息
    init:function(){
        this.setData({
            userInfo: app.globalData.ourUserInfo
        })
    },

    //用户修改了基本信息，并按了返回或保存，将信息更新到后台和global
    changeInfomation:function(e){

    },

    nicknameInput:function(e){
        qq.navigateTo({
            url:"../editNickname/editNickname"
        })
    },

    birthdayInput:function(e){
        var year = new Date().getFullYear();
        var birth = parseInt(e.detail.value.slice(0,4));
        var a = year-birth;
        console.log(year);
        this.setData({
            birthday: e.detail.value,
            age:a
        });
    },

    starInput:function(e){
        this.setData({
            star: this.data.allStars[e.detail.value]
        });
    },

    ageInput:function(e){
        this.setData({
            age: e.detail.value
        });
    },

    personalSignInput:function(e){
        console.log("跳转");
        qq.navigateTo({
            url:"../personalSign/personalSign"
        })
    }
});