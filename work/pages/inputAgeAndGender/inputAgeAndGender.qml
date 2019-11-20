<view>
    <view class="info">
        <text class="title">性别&年龄</text>
        <text class="tips">登录完成后，您的性别将无法修改</text>
        <view class="genderSelect">
            <view qq:for="{{genderImage}}" qq:for-item="i" qq:for-index="index">
                <image class="{{i.isSelected?'selected':'noSelect'}}" bindtap="selectGender" data-index="{{index}}" src="{{i.imageUrl}}"/>
            </view>
        </view>
        <view class="genderName">
            <text class="l">我是女生</text>
            <text class="r">我是男生</text>
        </view>
        <text class="birth">设置生日（年龄大于18岁）</text>
        <view>
            <picker mode="date" value="2001-01-01" start="1950-01-01" end="2001-11-20" bindchange="bindDateChange">
                <view class="date">
                    <text class="n">{{year}}</text>
                    <text class="t">年</text>
                    <text class="n">{{month}}</text>
                    <text class="t">月</text>
                    <text class="n">{{day}}</text>
                    <text class="t">日</text>
                </view>
            </picker>    
        </view>
        <view class="triangle"/>
        <text class="jump" bindtap="jump">还差两步</text>
    </view>
</view>