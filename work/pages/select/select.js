//select.js
//获取应用实例
const app = getApp()



Page({
  data: {
      sexblocks: [{
          choose: false,
          sex:"男"
          
      },{
          choose: false,
          sex:"女"
          
      },{
          choose: false,
          sex:"不限"
      }],
      edblocks: [{
          ed:"大专"
          
      },{
          ed:"本科"
          
      },{
          ed:"硕士"

      },{
          ed:"博士"
          
      }],

  },

  ageslidermin:function(e){
      this.setData({
          min:e.detail.value
      })
  },

  ageslidermax:function(f){
      this.setData({
          max:f.detail.value
      })
  },

 
  Bindtapcomp: function () {
    qq.navigateTo({
      url: '../maininterface/maininterface'
    })
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
}
})