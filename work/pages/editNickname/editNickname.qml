<view>
    <view class="input">
        <input bindinput="textNumber" maxlength="15" placeholder="请设置你的昵称" placeholder-class="placeholder"></input>
    </view>
    <view>
        <text class="tips">{{tips}}</text>
    </view>
    <view>
        <text class="number">{{num}}/15</text>
    </view>
    <button qq:if="{{num==0}}" class="success" bindtap="changeName">
        <text>完成</text>
    </button>
    <button qq:elif="{{num>0}}" class="success2" bindtap="changeName">
        <text>完成</text>
    </button>
</view>