<view class="container">
    <scroll-view
    qq:for="{{infos}}"
    qq:for-item="info"
    class="chat-view"
    scroll-y>
        <view data-id="{{info.id}}" bindtap="bindViewTap" class="user">
            <image src="../image/user.png" width="45rpx" class="user-head" />
            <view class="info">
                <view class="user-info">
                    <view class="name-m">{{info.name}}</view>
                    <view class="name-s">{{info.name}}</view>
                </view>
                <view class="chat-info">
                    <!-- <icon type="warn" size="15px" /> -->
                    <text class="time">11:11</text>
                </view>
            </view>
        </view>
    </scroll-view>
</view>