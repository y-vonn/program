<view class="container">
    <view bindtap="Bindtapsl" class="select">筛选 ▼</view>
    <view qq:for="{{blocks}}" 
    qq:for-item="block" 
    class="info-block">
        <image data-id="{{block.userId}}" bindtap="BindTaphe" src="{{imgHead}}{{block.headUrl}}" class="user-head"/>
        <view class="blockexhead">
            <view class="info-up">
                <view class="info-l">
                    <view class="ur-name">{{block.name}}</view>
                    <view class="time">{{block.pst+"分钟以前推荐"}}</view>
                 </view>
                <view class="info-r">
                    <view data-id="{{block.userId}}" data-name="{{block.name}}" data-head="{{block.headUrl}}" bindtap="Bindtapch" class="chat">私聊</view>
                </view>
            </view>
            <image src="{{imgHead}}{{block.picUrl}}" class="belowimg" mode="aspectFill"/>
        </view>
    </view>
</view>