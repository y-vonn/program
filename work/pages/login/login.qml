<view>
    <view class="info">
        <image src="{{userInfo.avatarUrl}}"></image>
        <text class="nickname">{{userInfo.nickname}}</text>
        <text class="personalSign">{{userInfo.personalSign}}</text>
        <text class="tips">登录后可在广场看到更多人哦，也可以获得更多互动。</text>
        <button bindtap="login" class="login">
            <text>立即登录</text>
        </button>
    </view>
</view>