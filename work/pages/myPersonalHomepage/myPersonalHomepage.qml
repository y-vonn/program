<view>
    <image bindtap="changeAvatar" class="userInfo-avatar" src="{{userInfo.avatarUrl}}"></image>
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
        <text class="info">{{userInfo.age}}岁</text>
        <text class="info">{{userInfo.star}}</text>
        <text class="info">{{userInfo.school}}</text>
        <button class="info" bindtap="editInfo">编辑资料</button>
    </view>
    <text class="myTags">我的标签</text>
    <view class="myTag">
        <view>
            <button bindtap="addTags" class="addTag">
                <text>+</text>
            </button>
        </view>
        <view qq:for="{{userInfo.tags}}" qq:key="*this" qq:for-item="i">
            <button class="tagButton">
                <text class="tag">{{i}}</text>
            </button> 
        </view>

            <text class="myPhotoWall">我的照片墙</text>

        <view qq:for="{{userInfo.photos}}" qq:key="*this" qq:for-item="i">
            <image class="photoWall" src="{{i}}"></image>
        </view>
    </view>
    
</view>
