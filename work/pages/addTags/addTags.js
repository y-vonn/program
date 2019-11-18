Page({
    data:{
        sysTags:[
            {
                tag: "帅",
                isSelect: false
            },
            {
                tag: "帅1",
                isSelect: false
            },
            {
                tag: "帅2",
                isSelect: false
            },
            {
                tag: "帅3",
                isSelect: false
            },
            {
                tag: "帅4",
                isSelect: false
            },
            {
                tag: "帅5",
                isSelect: false
            },
            {
                tag: "帅6",
                isSelect: false
            },
            {
                tag: "帅7",
                isSelect: false
            },
            {
                tag: "帅8",
                isSelect: false
            },
            {
                tag: "帅9",
                isSelect: false
            },
            {
                tag: "帅10",
                isSelect: false
            },
            {
                tag: "帅11",
                isSelect: true
            },
            {
                tag: "帅12",
                isSelect: false
            },
            {
                tag: "帅13",
                isSelect: false
            },
            {
                tag: "帅14",
                isSelect: false
            }
        ],
        showInput: false,
        tag:"",
        indexMap:{
            "帅气" : 0,
            "帅气1": 1,
            "帅气2": 2,
            "帅气3": 3,
            "帅气4": 4,
            "帅气5": 5,
            "帅气6": 6,
            "帅气7": 7,
            "帅气8": 8,
            "帅气9": 9,
            "帅气10": 10,
            "帅气11": 11,
            "帅气12": 12,
            "帅气13": 13,
            "帅气14": 14
        },
    },

    //后台传回来的tags，遍历，若在indexmap中，则置true，否则添加新的进去，置true，若用户添加新标签，
    //更新tags数组，sys添加新的，置true， isSelect用来显示不同class
    init:function(){
        var userTags=["帅气"]; //获取Globaltags数组或者是字符串
        var indexMap = this.data.indexMap;
        var sysTags = this.data.sysTags;
        for(var t in userTags){
            if(indexMap.hasOwnProperty(userTags[t])){
                var index = indexMap[userTags[t]];
                sysTags[index].isSelect = true;
            }else{
                sysTags.push({tag:t,isSelect: true});
            }
        }
        this.setData({
            sysTags:sysTags
        });
    },

    addTag:function(){
        this.setData({
            showInput:true
        })
    },
    createTag:function(e){
        if(this.data.tag!="")
            this.data.sysTags=this.data.sysTags.concat([{tag:this.data.tag, isSelect:true}]);
        this.setData({
            showInput:false,
            sysTags:this.data.sysTags,
            tag:''
        });
    },
    statusChange:function(e){
        var map = this.data.sysTags;
        var tag = e.currentTarget.dataset.tag;
        for(var t in map){
            if(map[t].tag==tag){
                map[t].isSelect = !map[t].isSelect;
            }
        }
        this.setData({
            sysTags:map
        })
    },

    tagInput:function(e){
        this.setData({
            tag:e.detail.value
        })
    },
    onLoad:function(){
        this.init();
    }
});