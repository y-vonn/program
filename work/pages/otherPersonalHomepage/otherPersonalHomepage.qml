<view>
    <view>
        <image class="user-avatar" src="{{path}}{{userInfo.avatarUrl}}"></image>
        <text class="user-nickname">{{userInfo.nickname}}</text>
        <button bindtap="chatToHim" class="weChat">
            <text>私聊</text>
        </button>
    </view>
    <view class="info">
        <text class="personalInfo">{{userInfo.age}}岁/{{gender}}/{{userInfo.school}}</text>
        <text class="personalSign">个性签名：{{userInfo.personalSign}}</text>
        <text class="personalTag">个性标签</text>
        <view class="myTag">
            <view qq:for="{{tags}}" qq:key="*this" qq:for-item="i">
                <button class="tagButton">
                    <text class="tag">{{i}}</text>
                </button> 
            </view>
        </view>
        <text class="otherPhotoWall">他的照片墙</text>
        <view class="photoWall">
             <view qq:for="{{photos}}" qq:key="*this" qq:for-item="i">
            <image qq:if="{{i!==('t.png')}}" class="photo" src="{{path}}{{i}}" data-i="{{index}}" bindtap="imageSelect"></image>
        </view>
        </view>
    </view>
    
</view>

