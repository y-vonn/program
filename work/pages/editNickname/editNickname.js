Page({
    data:{
        num:0,
        tips:"输入你的昵称，昵称不能为空。",
        newNickname:""
    },
    
    textNumber:function(e){
        var value = e.detail.value;
        var len = parseInt(value.length);
        if(len==0){
            this.setData({
                num:0,
                tips:"输入你的昵称，昵称不能为空。"
            })
        }else if(len>0){
            this.setData({
                num:len,
                tips:""
            })
        }
        this.setData({
            newNickname: value
        })
    },

    changeName:function(){

    }
});