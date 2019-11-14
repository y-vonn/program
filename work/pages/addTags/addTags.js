Page({
    data:{
        sysTags:['帅气','帅气','帅气','帅气','帅气','帅气','帅气','帅气','帅气','帅气','帅气','帅气','帅气','帅气'],
        showInput: false,
        tag:"tt"
    },

    addTag:function(){
        this.setData({
            showInput:true
        })
    },
    createTag:function(e){
        this.data.sysTags=[this.data.tag].concat(this.data.sysTags);
        this.setData({
            showInput:false,
            sysTags:this.data.sysTags,
            tag:''
        });
    },
    tagInput:function(e){
        this.setData({
            tag:e.detail.value
        })
    }
});