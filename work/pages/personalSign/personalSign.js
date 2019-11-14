Page({
    data:{
        num:0
    },
    inputSign:function(e){
        var input = e.detail.value;
        var len = parseInt(input.length);
        if(len==0){
            this.setData({
                num:0
            })
        }else{
            this.setData({
                num:len
            })
        }
    }
});