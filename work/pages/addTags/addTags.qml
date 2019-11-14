<view class="row">
    <view class="v" qq:for="{{sysTags}}" wx:key="*this" qq:for-item="i">
            <button class="tagButton">
                <text>{{i}}</text>
            </button> 
    </view>
    <view qq:if="{{showInput}}">
        <view class="createTag">
            <input class="input" maxlength="4" focus="auto" bindinput="tagInput" placeholder="输入最多四个汉字" placeholder-class='placeholderC' cursor-spacing="20"></input>
        </view>
        <text bindtap="createTag" class="create">添加</text>
    </view>
    <button bindtap="addTag" class="addTags">
        <text>+ 添加新标签</text>
    </button>
</view>