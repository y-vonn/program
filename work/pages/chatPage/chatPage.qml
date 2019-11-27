<view class="container">
    <view class="chat-container">
        <scroll-view 
        class="chat-scroll"
        scroll-y
        scroll-top="{{scrollTop}}"
        >
            <view
            qq:for="{{infos}}"
            qq:for-item="info"
            class="chat-view">
                <view qq:if="{{!info.isOwner}}" class="chat-content">
                    <view class="user-info">
                        <image qq:if="{{!info.isOwner}}" class="head-img" src="{{toUserHead}}" />
                    </view>
                    <view class="chat-text">{{info.content}}</view>
                </view>
                <view qq:if="{{info.isOwner}}" class="user-chat-content">
                    <view class="chat-text">{{info.content}}</view>
                </view>
            </view>
        </scroll-view>
        <form bindsubmit="formSubmit">
            <view class="chat-input">
                <input type="text" class="chat-input-text" name="text" placeholder="请输入字符"/>
                <button form-type="submit" class="chat-confirm"/>
            </view>
        </form>
    </view>
</view>