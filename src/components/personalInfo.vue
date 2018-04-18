<template>
    <div class="bg--color">
        <zl-head
            :title="'个人信息'">
        </zl-head>
        <div class="top-info fl-col fl-ai-c">
            <div class="info_avatar">
                <img src="../assets/avatar_ucenter.png">
            </div>
            <p class="fs-30">
                编号:171219001
            </p>
            <div class="fl-row fl-ai-c">
                <i class="info_phone"></i>
                <span class="fs-26">13819492534</span>
            </div>
        </div>
        <div class="order-amount fl-row fl-ai-c">
            <div class="today fl-gr-1 fl-col fl-ai-c bor-r">
                <p class="fs-28">今日业绩</p>
                <div class="fs-0">
                    <span class="num fs-50"
                        >40</span>
                    <span class="unit fs-26"
                        >单</span>
                </div>
            </div>
            <div class="month fl-gr-1 fl-col fl-ai-c">
                <p class="fs-28">本月业绩</p>
                <div class="fs-0">
                    <span class="num fs-50"
                        >40</span>
                    <span class="unit fs-26"
                        >单</span>
                </div>
            </div>
        </div>
        <ul class="userInfo-nav fl-row fl-jc-sb">
            <li class="item fl-gr-1 fl-col fl-ai-c bor-r">
                <i class="warehouse"></i>
                <span class="fs-28">绑定仓库</span>
            </li>
            <li class="item fl-gr-1 fl-col fl-ai-c bor-r">
                <i class="setting"></i>
                <span class="fs-28">设置</span>
            </li>
            <li class="item fl-gr-1 fl-col fl-ai-c">
                <i class="recording"></i>
                <span class="fs-28">在线记录</span>
            </li>
        </ul>
        <div class="comment fl-row fl-jc-c">
            <div class="comment-nav fl-row">
                <div class="fs-30 bor-r--color"
                    :class="{active: commentType == 0}"
                    @click="commentType=0">
                    好评(200)
                </div>
                <div class="fs-30"
                    :class="{active: commentType == 1}"
                    @click="commentType=1">
                    差评(12)
                </div>
            </div>
        </div>
        <comment-list>
        </comment-list>
    </div>
</template>

<script>
import ZlHead from '../base/head'
import CommentList from '../base/commentList' 

export default {
    components: {
        ZlHead,
        CommentList
    },
    data() {
        return {
            commentType: 0
        }
    }
}
</script>

<style scoped>
.bg--color {
    background-color: #f2f2f2;
} 
.top-info {
    padding-top: .213333rem;
    padding-bottom: .466667rem;
    background-color: #2d93dc;
}
.top-info .info_avatar {
    width: 2.08rem;
    height: 2.08rem;
    border-radius: 50%;
    overflow: hidden;
}
.top-info .info_avatar>img {
    width: 100%;
}
.top-info p, .top-info span {
    color: #fff;
}
.top-info p {
    line-height: .8rem;
}
.top-info span {
    line-height: .64rem;
}
.top-info .info_phone {
    margin-right: .133333rem;
    width: .306667rem;
    height: .44rem;
    background: url(../assets/user_info_phone.png) no-repeat center/contain;
}
.order-amount {
    margin-top: 2px;
}
.order-amount>div {
    padding-top: .253333rem;
    padding-bottom: .213333rem;
    background-color: #fff;
}
.order-amount p {
    line-height: .533333rem;
}
.order-amount .num {
    line-height: .826667rem;
    font-weight: bold;
}
.userInfo-nav {
    margin-top: .213333rem;
}
.item {
    padding-top: .266667rem;
    background-color: #fff;
}
.item>i {
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}
.item>p {
    line-height: .746667rem;
}
.item>.warehouse {
    width: .773333rem;
    height: .72rem;
    background-image: url(../assets/user_info_warehouse.png);
}
.item>.setting {
    width: .733333rem;
    height: .733333rem;
    background-image: url(../assets/user_info_setting.png);
}
.item>.recording {
    width: .733333rem;
    height: .733333rem;
    background-image: url(../assets/user_info_recording.png);
}
.comment {
    margin-top: .2rem;
    padding-bottom: .2rem;
    background-color: #fff;
}
.comment-nav {
    margin-top: .266667rem;
    background-color: #fff;
    border: 1px solid #3a9fec;
    border-radius: .133333rem;
    overflow: hidden;
}
.comment-nav>div {
    width: 3.146667rem;
    line-height: 1.066667rem;
    text-align: center;
}
.comment-nav>div.active {
    color: #fff;
    background-color: #3a9fec;
}
</style>
