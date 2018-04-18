<template>
    <div class="g-container bg-color"> 
        <div class="head fl-row fl-ai-c fl-jc-sb"> 
            <span class="menu"></span>
            <p class="fs-32">订单</p>
            <span class="news"></span>
        </div>
        <div class="work-off-content fl-gr-1 fl-row fl-ai-c fl-jc-c" 
            v-show="false">
            <div class="content fl-col fl-ai-c">
                <img src="../assets/work_start.png" alt="">
                <p class="fs-28">您现在处于休息状态上班后才能正常接单</p>
                <div class="btn-hollow fs-32 color-str">
                    立即上班
                </div>
            </div>
        </div>
        <div class="fl-gr-1">
            <ul class="fl-row">
                <li class="navItem fs-30 fl-gr-1" 
                    :class="{active: navActive == 'takeOrder'}"
                    @click="navActive='takeOrder'">
                    待抢单(4)
                </li>
                <li class="navItem fs-30 fl-gr-1" 
                    :class="{active: navActive == 'getOrder'}"
                    @click="navActive='getOrder'">
                    待取货(2)
                </li>
                <li class="navItem fs-30 fl-gr-1" 
                    :class="{active: navActive == 'sendOrder'}"
                    @click="navActive='sendOrder'">
                    带送达(1)
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navActive : 'takeOrder'
        }
    },

}
</script>

<style scoped>
.bg-color {
    background-color: #fff;
}
.head {
    padding-left: .266667rem;
    padding-right: .266667rem;
    height: 1.173333rem;
    background-color: #2d93dc;
}
.head>.menu {
    width: .613333rem;
    height: .52rem;
    background: url(../assets/btn_menu.png) no-repeat center/contain;
}
.head>.news {
    width: .64rem;
    height: .653333rem;
    background: url(../assets/news.png) no-repeat center/contain;
}
.head>.fs-32 {
    color: #fff;
}
.content>p {
    margin-top: .106667rem;
    margin-bottom: .213333rem;
    width: 3.36rem;
    line-height: .56rem;
    color: #656565;
}
.content>.btn-hollow {
    width: 3.893333rem;
    line-height: 1.12rem;
    text-align: center;
}
.content>img {
    width: 2.213333rem;
    height: 2.133333rem;
}
.navItem {
    position: relative;
    line-height: 1.146667rem;
    text-align: center;
}
.navItem.active {
    color: #2d93dc;
}
.navItem.active:before {
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    width: 100%;
    border: 2px solid #2d93dc;

}
</style>
