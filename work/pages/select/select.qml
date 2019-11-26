<view class="container">
    <text class="sex">性别 ▼</text> 
    <radio-group class="sexblo">
        <view qq:for="{{sexblocks}}" 
        qq:for-item="sexblock" 
        class="sex-block">
            <view bindtap="changeSex" data-sex="{{sexblock.sex}}" qq:if="{{sexblock.choose}}" class="sexsel sex-active">{{sexblock.sex}}</view>
            <view bindtap="changeSex" data-sex="{{sexblock.sex}}" qq:if="{{!sexblock.choose}}" class="sexsel">{{sexblock.sex}}</view>
        </view>
    </radio-group>
    <text class="age">年龄 ▼</text>
    <view class="agesel">
        <slider bindchange="ageslidermin" min="15" max="{{max}}" step="1" value="0" show-value />
        <slider bindchange="ageslidermax" min="{{min}}" max="40" step="1" value="40" show-value />
    </view>
    <text class="school">学校 ▼</text>
        <input class="inputschool" 
        placeholder="请输入学校名称" 
        type="text" />
    <text class="education">学历 ▼</text>
    <view class="edbl">
        <view qq:for="{{edblocks}}" 
        qq:for-item="edblock" 
        class="ed-block">
            <view class="edsel">{{edblock.ed}}</view>
        </view>
    </view>
    <view bindtap="Bindtapcomp" class="complete">完成</view>
</view>