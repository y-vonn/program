<view>
    <view class="info">
        <text class="title">昵称&学校</text>
        <view class="row">
            <view class="circle"></view>
            <text>取个好听的昵称吧！</text>
        </view>
        <view class="inputF">
            <input placeholder="设置昵称，15字以内" maxlength="15" bindinput="nameInput" placeholder-class="placeholder" />
        </view>
        <view class="row">
            <view class="circle"></view>
            <text>来填写你的学校吧！</text>
        </view>
        <view class="inputF">
            <input placeholder="请填写你的学校" maxlength="20" bindinput="schoolInput" placeholder-class="placeholder"/>
        </view>
        <view qq:if="{{canJump}}"class="triangle"></view>
        <text qq:if="{{canJump}}"class="jump" bindtap="jump">下一步</text>
    </view>
</view>