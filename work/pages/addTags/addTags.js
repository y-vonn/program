const app = getApp();
Page({
    data:{
        sysTags:[
            {
                tag: "宅",
                isSelect: false
            },
            {
                tag: "吃货",
                isSelect: false
            },
            {
                tag: "佛系",
                isSelect: false
            },
            {
                tag: "想恋爱",
                isSelect: false
            },
            {
                tag: "霸道总裁",
                isSelect: false
            },
            {
                tag: "阳光",
                isSelect: false
            },
            {
                tag: "小仙女",
                isSelect: false
            },
            {
                tag: "逗比",
                isSelect: false
            },
            {
                tag: "慢热",
                isSelect: false
            },
            {
                tag: "颜控",
                isSelect: false
            }
        ],
        showInput: false,
        tag:"",
        userInfo:{},
        indexMap:{
            "宅" : 0,
            "吃货": 1,
            "佛系": 2,
            "想恋爱": 3,
            "霸道总裁": 4,
            "阳光": 5,
            "小仙女": 6,
            "逗比": 7,
            "慢热": 8,
            "颜控": 9
        },
    },
    onLoad(){
        this.setData({
            userInfo:app.globalData.ourUserInfo
        }),
        this.init();
    },

    //后台传回来的tags，遍历，若在indexmap中，则置true，否则添加新的进去，置true，若用户添加新标签，
    //更新tags数组，sys添加新的，置true， isSelect用来显示不同class
    init:function(){
        var userTags= this.data.userInfo.tag.split(","); //获取Globaltags数组或者是字符串
        var indexMap = this.data.indexMap;
        var sysTags = this.data.sysTags;
        for(var i=0; i<userTags.length;i++){
            if(indexMap.hasOwnProperty(userTags[i])){
                var index = indexMap[userTags[i]];
                sysTags[index].isSelect = true;
            }else if(userTags[i]!=""){
                sysTags.push({tag:userTags[i], isSelect:true});
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
    onUnload(){
        var t =[];
        var tags = this.data.sysTags;
        for(var i=0;i<tags.length;i++){
            if(tags[i].isSelect){
                t.push(tags[i].tag);
            }
        }
        app.globalData.ourUserInfo.tag = t.join(",");
        var pages = getCurrentPages();
        var beforePage = pages[pages.length - 2];
        beforePage.updateTag();
    }
});