<view>
    <view class="inputArea">
        <textarea placeholder="有意思的签名会吸引更多人~" placeholder-class="placeholder" bindinput="inputSign"/>
    </view>

    <button qq:if="{{num==0}}" class="success" bindtap="changeName">
        <text>完成</text>
    </button>
    <button qq:elif="{{num>0}}" class="success2" bindtap="changeName">
        <text>完成</text>
    </button>
</view>