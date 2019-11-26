<view class="container">
    <scroll-view
    qq:for="{{infos}}"
    qq:for-item="info"
    class="chat-view"
    scroll-y>
        <view class="user">
            <image data-id="{{info.id}}" bindtap="BindWatchTap" src="{{info.head}}" width="45rpx" class="user-head" />
            <view data-id="{{info.id}}" data-name="{{info.name}}" bindtap="BindViewTap" class="info">
                <view class="user-info">
                    <view class="name-m">{{info.name}}</view>
                    <view class="name-s">{{info.name}}</view>
                </view>
                <view class="chat-info">
                    <!-- <icon type="warn" size="15px" /> -->
                    <text class="time">{{info.time}}</text>
                </view>
            </view>
        </view>
    </scroll-view>
</view>