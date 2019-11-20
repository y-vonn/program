<view>
    <view class="info">
        <text class="title">制作头像</text>
        <view class="row"> 
            <text class="tips">推荐使用本人</text>
            <text class="highlight">真实照片</text>
            <text class="tips">哦</text>
        </view>
        <image class="avatar" src="{{userInfo.avatarUrl}}" bindtap="changeAvatar"/>
        <text class="t">点击添加头像</text>
        <view class="triangle"></view>
        <text class="jump" bindtap="jump">最后一步了</text>
    </view>
</view>