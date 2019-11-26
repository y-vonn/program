<view class="container">
    <view bindtap="Bindtapsl" class="select">筛选 ▼</view>
    <view qq:for="{{blocks}}" 
    qq:for-item="block" 
    class="info-block">
        <image src="../../img/test.jpg" class="user-head"/>
        <view class="blockexhead">
            <view class="info-up">
                <view class="info-l">
                    <view class="ur-name">{{block.name}}</view>
                    <view class="time">{{block.pst+"分钟以前推荐"}}</view>
                 </view>
                <view class="info-r">
                    <view bindtap="Bindtapch" class="chat">私聊</view>
                </view>
            </view>
            <image src="../../img/below.jpg" class="belowimg" mode="aspectFill"/>
        </view>
    </view>
</view>