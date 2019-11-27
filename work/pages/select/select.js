//select.js
//获取应用实例
const app = getApp()

Page({
  data: {
      sexblocks: [{
          sex:"男",
          choose:false
      },{
          sex:"女",
          choose:false
      },{
          sex:"不限",
          choose:false
      }],
      edblocks: [{
          ed:"大专",
          choose:false
          
      },{
          ed:"本科",
          choose:false
          
      },{
          ed:"硕士",
          choose:false

      },{
          ed:"博士",
          choose:false
          
      }],

      array: ['不限','北京邮电大学', '南京邮电大学'],
      objectArray: [
      {
        id: 0,
        school: '不限'
      },
      {
        id: 1,
        school: '北京邮电大学'
      },
      {
        id: 2,
        school: '南京邮电大学'
      }
    ],
  },

  changeSex: function(e) {
    var sex = e.currentTarget.dataset.sex
    if(sex == "男") {
        this.setData({
            sexblocks: [{
                choose: true,
                sex:"男"
                
            },{
                choose: false,
                sex:"女"
                
            },{
                choose: false,
                sex:"不限"
            }]
        })
    }
    else if(sex == "女") {
        this.setData({
            sexblocks: [{
                choose: false,
                sex:"男"
                
            },{
                choose: true,
                sex:"女"
                
            },{
                choose: false,
                sex:"不限"
            }]
        })
    }
    else {
        this.setData({
            sexblocks: [{
                choose: false,
                sex:"男"
                
            },{
                choose: false,
                sex:"女"
                
            },{
                choose: true,
                sex:"不限"
            }]
        })
    }
},

  changeed: function(e) {
    var ed = e.currentTarget.dataset.ed
    if(ed == "大专") {
        this.setData({
            edblocks: [{
                choose: true,
                ed:"大专"
                
            },{
                choose: false,
                ed:"本科"
                
            },{
                choose: false,
                ed:"硕士"
            },{
                choose: false,
                ed:"博士"
            
            }]
        })
    }
    else if(ed == "本科") {
        this.setData({
            edblocks: [{
                choose: false,
                ed:"大专"
                
            },{
                choose: true,
                ed:"本科"
                
            },{
                choose: false,
                ed:"硕士"
            },{
                choose: false,
                ed:"博士"
            
            }]
        })
    }
    else if(ed == "硕士") {
        this.setData({
            edblocks: [{
                choose: false,
                ed:"大专"
                
            },{
                choose: false,
                ed:"本科"
                
            },{
                choose: true,
                ed:"硕士"
            },{
                choose: false,
                ed:"博士"
            }]
        })
    }
    else {
        this.setData({
            edblocks: [{
                choose: false,
                ed:"大专"
                
            },{
                choose: false,
                ed:"本科"
                
            },{
                choose: false,
                ed:"硕士"
            },{
                choose: true,
                ed:"博士"
            }]
        })
    }
  },

  bindschChange: function(e){
      this.setData({
        index: e.detail.value
      })
  },
 
  bindtapcomp: function () {
    qq.navigateTo({
      url: '../maininterface/maininterface'
    })
  },

})