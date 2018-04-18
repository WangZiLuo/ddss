<template>
    <div class="g-container bg--color">
        <zl-head
            :title="'我的账户'">
        </zl-head>
        <div class="top-info padd-hd fl-row fl-jc-sb fl-ai-c">
            <div class="fl-col">
                <span class="str fs-28">今日收益(元)</span>
                <span class="num fs-82">300</span>
            </div>
            <div class="fl-row">
                <span class="btn fs-30">去提现</span>
            </div>
        </div>
        <div class="money-recording padd-hd fl-row fl-ai-c fl-jc-sb">
            <div class="left">
                <div class="fl-row fl-ai-c">
                    <i class="dot"></i>
                    <span class="str fs-30">累计收益</span>
                    <span class="num fs-40">1650</span>
                </div>
                <div class="fl-row fl-ai-c">
                    <i class="dot"></i>
                    <span class="str fs-30">提现金额</span>
                    <span class="num fs-40">560</span>
                </div>
            </div>
            <div class="right">
                <div class="ring fl-col fl-jc-c fl-ai-c">
                    <span class="str fs-30">余额</span>
                    <span class="num fs-60">500</span>
                </div>
            </div>
        </div>
        <div class="cell-hd">
            <zl-cell
                class="cell-bg"
                title="提现记录">
                <i class="icon-withdrawRecording"
                    slot="icon">
                </i>
            </zl-cell>
            <zl-cell
                class="cell-bg"
                title="收益记录">
                <i class="icon-incomeRecording"
                    slot="icon">
                </i>
            </zl-cell>
        </div>
    </div>
</template>

<script>
import ZlHead from '../base/head'
import ZlCell from '../base/cell'

export default {
    components: {
        ZlHead,
        ZlCell
    }
}
</script>

<style scoped>
.bg--color {
    background-color: #f3f3f3;
}
.top-info{
    padding-top: .266667rem;
    padding-bottom: .266667rem;
    background-color: #2d93dc;
}
.top-info .str {
    line-height: .746667rem;
    color: #fff;
}
.top-info .num {
    line-height: 1.466667rem;
    font-weight: bold;
    color: #fff;
}
.top-info .btn {
    width: 2.106667rem;
    line-height: .96rem;
    text-align: center;
    color: #fff;
    border: 1px solid #fff;
    border-radius: .106667rem;
}
.money-recording {
    padding-top: .32rem;
    padding-bottom: .32rem;
    background-color: #fff;
}
.money-recording .dot {
    width: .306667rem;
    height: .306667rem;
    background: url(../assets/li_dot.png) no-repeat center/contain;
}
.money-recording .left .str {
    margin-left: .133333rem;
}
.money-recording .left .num {
    margin-left: .32rem;
    line-height: 1.12rem;
}
.money-recording .right {
    margin-right: .666667rem;
}
.money-recording .ring {
    width: 2.746667rem;
    height: 2.746667rem;
    border: .186667rem solid #f27b72;
    border-radius: 50%;
}
.money-recording .ring .str {
    line-height: .666667rem;
}
.money-recording .ring .num {
    line-height: 1.066667rem;
}
.cell-hd {
    margin-top: .2rem;
}
.cell-bg {
    background-color: #fff;
}
.cell-hd .icon-withdrawRecording {
    margin-right: .16rem;
    width: .746667rem;
    height: .613333rem;
    background: url(../assets/icon-withdrawRecording.png) no-repeat center/contain;
}
.cell-hd .icon-incomeRecording {
    margin-right: .16rem;
    width: .68rem;
    height: .693333rem;
    background: url(../assets/icon-incomeRecording.png) no-repeat center/contain;
}
</style>
