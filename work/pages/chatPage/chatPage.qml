<view class="container">
    <view class="chat-container">
        <scroll-view 
        class="chat-scroll"
        scroll-y
        >
            <view
            qq:for="{{infos}}"
            qq:for-item="info"
            class="chat-view">
                <view qq:if="{{!info.isOwner}}" class="chat-content">
                    <view class="user-info">
                        <icon qq:if="{{!info.isOwner}}" class="head-img" type="success" size="60rpx" />
                    </view>
                    <view class="chat-text">{{info.content}}</view>
                </view>
                <view qq:if="{{info.isOwner}}" class="user-chat-content">
                    <view class="chat-text">{{info.content}}</view>
                </view>
            </view>
        </scroll-view>
        <view class="chat-input">
            <input class="chat-input-text" placeholder="请输入字符"/>
            <view class="chat-confirm"/>
        </view>
    </view>
</view>