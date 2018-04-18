<template>
    <div class="g-container bg--color">
        <zl-head
            title="收桶详情">
        </zl-head>
        <div class="conent padd-hd">
            <div class="customerInfo padd-hd">
                <p class="tittle fs-30">
                    还桶信息
                </p>
                <div class="cell fl-row fl-ai-c">
                    <span class="fs-30 left">数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量:</span>
                    <span class="fs-30 right amount">3桶</span>
                </div>
                <div class="cell fl-row fl-ai-c">
                    <span class="fs-30 left">联&nbsp;&nbsp;系&nbsp;&nbsp;人:</span>
                    <span class="fs-30 right">李杰</span>
                </div>
                <div class="cell fl-row fl-ai-c fl-jc-sb">
                    <div>
                        <span class="fs-30 left">手&nbsp;&nbsp;机&nbsp;&nbsp;号:</span>
                        <span class="fs-30 right">18403473685</span>
                    </div>
                    <i class="icon_phone">
                    </i>
                </div>
                <div class="cell fl-row fl-ai-b">
                    <span class="fs-30 fl-sh-0 left">联系地址:</span>
                    <span class="fs-30 right sp">石祥路48号</span>
                </div>
                <div class="cell fl-row fl-ai-b">
                    <span class="fs-30 fl-sh-0 left">退桶说明:</span>
                    <span class="fs-30 right sp">情况说明，情况说明范文，情况说明格式情况说怎么写，财务情况说明书，情况说明书情况说明书范文模板。</span>
                </div>
                <div class="cell fl-row fl-ai-c">
                    <span class="fs-30 left">通知时间:</span>
                    <span class="fs-30 right">2017-11-05 16：30</span>
                </div>
            </div>
        </div>
        <div class="btn fs-30">
            确认取桶
        </div>
    </div>
</template>

<script>
import ZlHead from '../base/head'

export default {
    components: {
        ZlHead
    }
}
</script>

<style scoped>
.bg--color {
    background-color: #f3f3f3;
}
.customerInfo {
    margin-top: .2rem;
    background-color: #fff;
}
.customerInfo .tittle {
    line-height: 1.04rem;
    font-weight: bold;
}
.cell .left, .cell .right {
    line-height: .933333rem;
}
.cell .left {
    line-height: .933333rem;
    color: #656565;
}
.cell .right {
    margin-left: .24rem;
    line-height: .933333rem;
}
.cell .right.amount {
    color: #ed4d41;
}
.cell .icon_phone {
    width: .733333rem;
    height: .733333rem;
    background: url(../assets/warehouse_phone.png) no-repeat center/contain;
}
.cell .right.sp {
    line-height: .586667rem;
}
.btn {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    line-height: 1.333333rem;
    color: #fff;
    text-align: center;
    background-color: #2d93dc;
}
</style>
