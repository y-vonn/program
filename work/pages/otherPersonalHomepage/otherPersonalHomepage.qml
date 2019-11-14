<view>
    <image class="user-avatar" src="{{userInfo.avatarUrl}}"></image>
    <text class="user-nickname">{{userInfo.nickname}}</text>
    <button class="weChat">
        <text>私聊</text>
    </button>

    <text class="personalInfo">{{userInfo.personalInfo}}</text>
    <text class="personalSign">个性签名：{{userInfo.personalSign}}</text>
    <text class="personalTag">个性标签</text>
    <view class="myTag">
        <view qq:for="{{['中国人','aewfw','awefawf','wa','wafwe','wafeeee','eee']}}" qq:key="*this" qq:for-item="i">
            <button class="tagButton">
                <text class="tag">{{i}}</text>
            </button> 
        </view>

        <text class="otherPhotoWall">他的照片墙</text>
        <view qq:for="{{userInfo.photos}}" qq:key="*this" qq:for-item="i">
            <image class="photoWall" src="{{i}}"></image>
        </view>
    </view>
</view>

