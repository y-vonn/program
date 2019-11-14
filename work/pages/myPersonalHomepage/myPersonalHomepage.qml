<view>
    <image bindtap="changeAvatar" class="userInfo-avatar" src="{{userInfo.avatarUrl}}"></image>
    <text class="userInfo-nickname">{{userInfo.nickname}}</text>
    <text class="userInfo-personalSign">{{userInfo.personalSign}}</text>
    <text class="myTags">我的标签</text>
    <view class="basicInfo">
        <text class="info">{{userInfo.age}}</text>
        <text class="info">{{userInfo.star}}</text>
        <text class="info">{{userInfo.school}}</text>
        <button class="info" bindtap="editInfo">编辑资料</button>
    </view>

    <view class="myTag">
        <button bindtap="addTags" class="addTag">
            <text>+</text>
        </button>
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
