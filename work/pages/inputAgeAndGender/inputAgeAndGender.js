const app = getApp();

Page({
    data:{
        year:"2001",
        month:"01",
        day:"01",
        genderImage:[
            {
                imageUrl:"../image/sss.jpg",
                isSelected:true
            },
            {
                imageUrl:"../image/avatar.png",
                isSelected:false
            }
        ]
    },
    // 修改日期显示，并更新用户全局信息，并更新后台信息
    bindDateChange:function(e){
        var date = e.detail.value;
        var y = date.slice(0,4);
        var m = date.slice(5,7);
        var d = date.slice(8,10);
        this.setData({
            year:y,
            month:m,
            day:d
        });
        app.globalData.ourUserInfo.birthday=date;
    },
    // 点击选择性别
    selectGender:function(e){
        var index = e.currentTarget.dataset.index;
        var gender = this.data.genderImage;
        for(var i in gender){
            if(i==index)
                gender[i].isSelected = true;
            else{
                gender[i].isSelected = false;
            } 
        }
        this.setData({
            genderImage:gender
        })
        app.globalData.ourUserInfo.gender=index;
    },
    // 本页填完，跳转下一页或者重定位到下一页
    jump:function(){
        console.log(app.globalData.ourUserInfo);
        qq.navigateTo({
            url:"../inputNameAndSchool/inputNameAndSchool"
        })
    }
});