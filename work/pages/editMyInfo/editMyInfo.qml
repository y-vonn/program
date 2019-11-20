<view>
    <view class="divLines">
        <view qq:for="{{count}}" qq:key="*this" qq:for-item="i">
            <view class="divLine"></view>
        </view>
    </view>

    <view class="infoList">
        <view qq:for="{{infoList}}" qq:key="*this" qq:for-item="i">
            <text class="info">{{i}}</text>
        </view>
    </view>

    <view class="Id">
        <input name="Id" maxlength="40" placeholder-class='placeholderClass' value="{{userInfo.userId}}" disabled="true"></input>
    </view>

    <view class="school">
        <input name="school" maxlength="40" placeholder-class='placeholderClass' value="{{userInfo.school}}" disabled="true"></input>
    </view>

    <view class="inputNickname">
        <input name="nickname" placeholder-class='placeholderClass' placeholder="{{userInfo.nickname}}" disabled="true" bindtap="nicknameInput"/>
        <view class='arrow'></view>
    </view>

    <picker mode="date" value="{{userInfo.birthday}}" start="1950-01-01" end="2015-01-01" bindchange="birthdayInput">
        <view class="date" name="date">
        <input name="birthday" value="{{userInfo.birthday}}" placeholder-class='placeholderClass' disabled="true" placeholder='请选择日期'></input>
        </view>
    </picker>

    <picker mode="selector" value="{{userInfo.star}}" range="{{allStars}}" bindchange="starInput">
        <view class="star" name="star">
        <input name="myStar" value="{{userInfo.star}}" placeholder-class='placeholderClass' disabled="true" placeholder='请选择星座'></input>
        </view>
    </picker>

    <view class="inputAge">
        <input name="age" maxlength="3" placeholder-class='placeholderClass' value="{{userInfo.age}}" bindinput="ageInput"></input>
    </view>

    <view class="gender">
        <text wx:if="{{gender}}==0">女</text>
        <text wx:elif="{{gender}}==1">男</text>
    </view>

    <view class="inputSign">
        <input name="sign" placeholder-class='placeholderClass' value="{{userInfo.personalSign}}" disabled="true" placeholder='添加你的个性签名' bindtap="personalSignInput"></input>
        <view class='arrow'></view>
    </view>
</view>