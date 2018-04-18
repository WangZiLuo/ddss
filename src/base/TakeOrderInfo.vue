<template>
    <div class="order-info_content">
        <div class="order-info_name fl-row fl-jc-sb">  
            <div class="fl-row">
                <span class="light fs-28">顾&nbsp;&nbsp;&nbsp;&nbsp;客:</span>
                <span class="fs-28">马女士</span>
            </div>
            <div class="fl-row">
                <span class="light fs-28">仓&nbsp;&nbsp;&nbsp;&nbsp;库:</span>
                <span class="fs-28">董女士</span>
            </div>
        </div>
        <div class="order-info_phone fl-row fl-jc-sb fl-ai-c">
            <div class="fl-row fl-ai-c">
                <i class="fs-34">收</i>
                <span class="fl-gr-1 fs-30">18456955235</span>
            </div>
            <div class="fl-row fl-ai-c">
                <i class="fs-34">仓</i>
                <span class="fl-gr-1 fs-30">18456955235</span>
            </div>
        </div>
        <div>
            <div class="order-info_cell bor-t fl-row">
                <span class="light fs-30">订&nbsp;&nbsp;单&nbsp;&nbsp;号:</span>
                <span class="fs-30">20171201630332536</span>
            </div>
            <div class="order-info_cell bor-t fl-row">
                <span class="light fs-30">下单时间:</span>
                <span class="fs-30">09：20</span>
            </div>
            <div class="order-info_cell bor-t fl-row">
                <span class="light fs-30">抢单时间:</span>
                <span class="fs-30">09：30</span>
            </div>
            <div class="order-info_cell bor-t fl-row">
                <span class="light fs-30">备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注:</span>
                <span class="fs-30">尽量快一点小哥，五天没喝水了</span>
            </div>
        </div>
        <div class="btn-des fl-row-r">
            <div class="btn-des_main fs-28">
                申请调度
            </div>
        </div>
        <div class="btn fs-32">
            确认送达
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.order-info_content {
    padding-left: .266667rem;
    padding-right: .266667rem;
    padding-bottom: 1.6rem;
}
.order-info_content span {
    line-height: .453333rem;
}
.order-info_name {
    margin-top: .32rem;
}
.order-info_name>div {
    width: 4.32rem;
}
.light {
    margin-right: .293333rem;
    color: #666;
}
.order-info_phone {
    margin-top: .333333rem;
    margin-bottom: .333333rem;
}
.order-info_phone>div {
    border: 1px solid #2d93dc;
    border-radius: .106667rem;
    overflow: hidden;
}
.order-info_phone i {
    padding-left: .32rem;
    padding-right: .32rem;
    line-height: .84rem;
    color: #fff;
    background-color: #2d93dc;
}
.order-info_phone span {
    padding-left: .453333rem;
    padding-right: .32rem;
}
.order-info_cell>span {
    line-height: 1.12rem;
}
.order-info_content .btn {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1.333333rem;
    line-height: 1.333333rem;
    font-weight: bold;
    background-color: #2d93dc;
    color: #fff;
    text-align: center;
}
.btn-des {
    padding-top: .2rem;
    padding-bottom: .6rem;
}
.btn-des_main {
    padding-left: .213333rem;
    padding-right: .213333rem;
    line-height: .72rem;
    border: 1px solid #959595;
    border-radius: .106667rem;
}
</style>
