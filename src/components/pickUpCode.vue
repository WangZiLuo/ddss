<template>
    <div class="bg--color">
        <zl-head
            :title="'取货码'">
        </zl-head>
        <div class="fl-col fl-ai-c">
            <div class="code-wall fl-col fl-ai-c">
                <div class="codeWall_strCode" style="font-size: 0;">
                    <span class="sub fs-32">取货码:</span>
                    <span class="content fs-32">058462</span>
                </div>
                <div class="codeWall_QRCode fl-col fl-ai-c fl-jc-c">
                    <img src="../assets/pick_up_QRCode.jpg" alt="">
                </div>
                <div class="codeWall_title">
                    <div class="semiCir--right"></div>
                    <div class="line"></div>
                    <p class="str fs-32">
                        商品信息
                    </p>
                    <div class="semiCir--left"></div>
                </div>
                <ul class="orderGoods-list">
                    <li class="fl-row">
                        <p class="fs-30">农夫山泉19升饮用天然矿泉水</p>
                        <span class="fs-30">x1</span>
                    </li>
                    <li class="fl-row">
                        <p class="fs-30">农夫山泉19升饮用天然矿泉水</p>
                        <span class="fs-30">x1</span>
                    </li>
                </ul>
                <div class="orderGoods-total fl-row-r">
                    <span class="fs-32">
                        共:2桶
                    </span>
                </div>
                <div class="code-wall_border">

                </div>
            </div>
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

<style>
.bg--color {
    height: 100vh;
    background-color: #2d93dc;
}
.code-wall {
    margin-top: .706667rem;
    padding-top: .733333rem;
    width: 9.066667rem;
    background-color: #fff;
    border-radius: .106667rem;
}
.codeWall_strCode>span {
    line-height: 1.36rem
}
.codeWall_strCode .content {
    color: #ed4d41;
}
.codeWall_QRCode {
    width: 5.04rem;
    height: 5.04rem;
    border: 1px solid #959595;
}
.codeWall_QRCode img {
    width: 4.96rem;
}
.codeWall_title {
    position: relative;
    width: 100%;
    height: 1.2rem;
}
.codeWall_title .str {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: 2.253333rem;
    line-height: 1.2rem;
    text-align: center;
    background-color: #fff;
}
.codeWall_title .semiCir--right {
    position: absolute;
    top: .32rem;
    left: -1px;
    width: .266667rem;
    height: .533333rem;
    background-color: #2d93dc;
    border-radius: 0 .266667rem .266667rem 0;
}
.codeWall_title .semiCir--left {
    position: absolute;
    top: .32rem;
    right: -1px;
    width: .266667rem;
    height: .533333rem;
    background-color: #2d93dc;
    border-radius: .266667rem 0 0 .266667rem;
}
.codeWall_title .line {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 5.026667rem;
    height: 1px;
    background-color: #999;
}
.orderGoods-list {
    box-sizing: border-box;
    padding-left: .32rem;
    padding-right: .32rem;
    padding-bottom: .306667rem;
    width: 100%;
}
.orderGoods-list li>p, .orderGoods-list li>span {
    line-height: .826667rem;
}
.orderGoods-list li>span {
    margin-left: .16rem;
}
.orderGoods-total {
    border-top: 1px dashed #cbcbcb;
    width: 8.36rem;
}
.orderGoods-total>span {
    line-height: 1.36rem;
    color: #ed4d41;
}
.code-wall_border {
    width: 100%;
    height: .173333rem;
    background-size: .52rem .173333rem;
    background-position: 0 bottom;
    background-image: url(../assets/semiCir.png);
    background-repeat: repeat-x;
}
</style>

