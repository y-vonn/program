<view>
    <image bindtap="changeAvatar" class="userInfo-avatar" src="{{path}}{{userInfo.avatarUrl}}"></image>
    <button bindtap="infoConfirm" class="infoConfirm">
        <text>实名认证</text>
    </button>
    <view>
        <text class="userInfo-nickname">{{userInfo.nickname}}</text>
    </view>
    <view>
        <text class="userInfo-personalSign">{{userInfo.personalSign}}</text>
    </view>

    <view class="basicInfo">
        <image qq:if="{{userInfo.gender}}==0" class="gender" src="../image/girl.png"/>
        <image qq:elif="{{userInfo.gender}}==1" class="gender" src="../image/boy.png"/>
        <text class="info1">{{userInfo.age}}岁</text>
        <text class="info2">{{userInfo.star}}</text>
        <text class="info3">{{userInfo.school}}</text>
        <image class="edit" src="../image/edit.png"/>
        <text class="info4" bindtap="editInfo">编辑资料</text>
    </view>
    <text class="myTags">我的标签</text>
    <view class="myTag">
        <view>
            <button bindtap="addTags" class="addTag">
                <text>+</text>
            </button>
        </view>
        <view qq:for="{{tags}}" qq:key="*this" qq:for-item="i">
            <button class="tagButton">
                <text class="tag">{{i}}</text>
            </button> 
        </view>

            <text class="myPhotoWall">我的照片墙</text>

        <view qq:for="{{photos}}" qq:key="p" qq:for-item="i" qq:for-index="index">
            <image qq:if="{{i!==('t.png')}}" class="photoWall" src="{{path}}{{i}}" data-i="{{index}}" bindtap="imageSelect"></image>
            <view qq:else class="noPhoto" data-i="{{index}}" bindtap="imageSelect">
            添加图片
            </view>
        </view>
    </view>
    
</view>
