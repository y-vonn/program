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
        <input class="inputminage" 
        placeholder="输入年龄下限" 
        type="text" />
        <input class="inputmaxage" 
        placeholder="输入年龄上限" 
        type="text" />
    </view>
    <text class="school">学校 ▼</text>
    <view class="schoolsel">
        <picker bindchange="bindschChange" value="{{index}}" range="{{array}}">
            <view class="picker">
                目标学校：{{array[index]}}
            </view>
        </picker>
    </view>
    <text class="education">学历 ▼</text>
    <radio-group class="edblo">
        <view qq:for="{{edblocks}}" 
        qq:for-item="edblock" 
        class="ed-block">
            <view bindtap="changeed" data-ed="{{edblock.ed}}" qq:if="{{edblock.choose}}" class="edsel ed-active">{{edblock.ed}}</view>
            <view bindtap="changeed" data-ed="{{edblock.ed}}" qq:if="{{!edblock.choose}}" class="edsel">{{edblock.ed}}</view>
        </view>
    </radio-group>
    <view bindtap="bindtapcomp" class="complete">完成</view>
</view>