Page({
    data:{
        avatarUrl:"../image/a.png",
        tempFilePaths:""
    },

    picSelect:function(e){
        qq.chooseImage({
        count:1,
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        tempFilePaths = res.tempFilePaths
      }
    })
    },
    //上传本地图片到服务器，获取url，更新头像url
    uploadPic:function(){
        qq.uploadFile({
            
        })
    }
});