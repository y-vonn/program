var app = getApp();

Page({
    data:{
        userInfo:{avatarUrl:"../image/avatar.png",
            nickname: "grape",
            personalInfo:"23岁/北京航空航天大学/白羊座",
            personalSign:"-----------------------------",
            personalTag:"eee",
            photos:["../image/t.png","../image/t.png","../image/t.png","../image/t.png","../image/t.png","../image/t.png",],
            tags:['中国人','中国人','中国人'],
            star:"白羊座",
            school:"北京邮电大学",
            age:"15岁"}
    },
    onLoad(){
        console.log(app.globalData);
        // this.setData({
        //     userInfo:app.globalData.ourUserInfo
        // });
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
    }
});