<template>
    <div>
        <div class="qrcode fl-row fl-jc-sb fl-ai-c">
            <div class="qrcode_left">
                <span class="fs-30">
                    取货码: 
                </span>
                <span class="fs-30" style="font-weight: bold;">
                    {{orderQRCode.numCode}}
                </span>
            </div>
            <div class="qrcode_right fl-row fl-ai-c">
                <span style="margin-right: .2rem;" :style="{backgroundImage: orderQRCode.QRCode}">

                </span>
                <i>

                </i>
            </div>
        </div>
        <div class="delivery">
            <div class="delivery-info fl-row">
                <div class="fl-col fl-ai-c fl-gr-1 bor-r">
                    <p class="fs-28">倒计时</p>
                    <div class="fs-28 time">
                        <span class="fs-28" style="font-weight: bold;">30</span>分钟<span class="fs-28" style="font-weight: bold;">50</span>秒
                    </div>
                </div>
                <div class="fl-col fl-ai-c fl-gr-1">
                    <p class="fs-28">未付款</p>
                    <span class="fs-28 price" style="font-weight: bold;">68</span>
                </div>
            </div>
            <div class="delivery-address">
                <div class="take fl-row fl-ai-c bor-b">
                    <i class="fs-28 fl-sh-0">取</i>
                    <p class="address-str fl-gr-1 fs-34 bor-r">
                        西湖区天目山路518号西溪 国家湿地公园502
                    </p>
                    <span class="fs-28 fl-sh-0">
                        5.8km
                    </span>
                </div>
                <div class="give fl-row fl-ai-c">
                    <i class="fs-28 fl-sh-0">送</i>
                    <p class="address-str fl-gr-1 fs-34 bor-r">
                        中大银泰城店205号
                    </p>
                    <span class="fs-28 fl-sh-0">
                        6.7km
                    </span>
                </div>
            </div>
        </div>
        <div class="goods">
            <p class="fs-30 goods-num_title">商品数量({{goodsTotal}}件)</p>
            <ul class="goods-list">
                <li class="goods-item fl-row fl-ai-c"
                    v-for="(item, index) in goodsList"
                    :key="index">
                    <div class="goods-img">
                    </div>
                    <div class="fl-col fl-jc-c">
                        <div class="fl-row fl-ai-c">
                            <p class="goods-name fs-30">{{item.name}}</p>
                            <span class="fs-30">x{{item.amount}}</span>
                        </div>
                        <span class="goods-price fs-30">{{item.price}}</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="order-info">
            <p class="fs-30 bor-b">订单信息</p>
            <!-- <grab-order-info></grab-order-info> -->
            <!-- <take-order-info></take-order-info> -->
            <send-order-info></send-order-info>
        </div>
    </div>
</template>

<script>
import GrabOrderInfo from '../base/GrabOrderInfo'
import TakeOrderInfo from '../base/TakeOrderInfo'
import SendOrderInfo from '../base/SendOrderInfo'
import QRCode from '../assets/order_QRCode.png'

export default {
    components: {
        GrabOrderInfo,
        TakeOrderInfo,
        SendOrderInfo
    },
    data() {
        return {
            orderQRCode: {
                numCode: '058462',
                QRCode: `url(${QRCode})`
            },
            goodsList: [
                {
                    name: '农夫山泉19升饮用天然矿泉水',
                    amount: 1,
                    price: 34
                },
                {
                    name: '农夫山泉19升饮用天然矿泉水',
                    amount: 1,
                    price: 34
                }
            ]
        }
    },
    computed: {
        goodsTotal: function() {
            let _goodsTotal = 0
            for ( const ele of this.goodsList ) {
                _goodsTotal += ele.amount
            }
            return _goodsTotal
        }
        
    }
}
</script>

<style scoped>
.qrcode {
    padding-left: .266667rem;
    padding-right: .266667rem;
    height: 1.173333rem;
}
.qrcode_left>span {
    line-height: 1.173333rem;
}
.qrcode_right>span {
    width: .666667rem;
    height: .666667rem;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}
.qrcode_right>i {
    width: .213333rem;
    height: .4rem;
    background: url(../assets/cell_link.png) no-repeat center/contain;
}
.goods {
    padding-bottom: .333333rem;
}
.goods-num_title {
    line-height: 1.146667rem;
    font-weight: bold;
    border-bottom: 1px solid #e7e7e7;
}
.goods-list, .goods-num_title {
    padding-left: .266667rem;
    padding-right: .266667rem;
}
.goods-item {
    padding-top: .16rem;
    padding-bottom: .16rem;
}
.goods-img {
    margin-right: .133333rem;
    width: 1.293333rem;
    height: 1.293333rem;
    background: url(../assets/goods_img.jpg) no-repeat center/cover;
    border-radius: .133333rem;
}
.goods-name, .goods-price {
    line-height: .826667rem;
}
.goods-name {
    max-width: 7.173333rem;
    margin-right: .106667rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.goods-price {
    font-weight: bold;
}
.goods-price:before {
    content: '¥';
    font-size: .32rem;
    font-weight: bold;
}
.delivery-info {
    padding-top: .32rem;
    padding-bottom: .32rem;
}
.delivery-info .time {
    color: #2d93dc;
}
.delivery-info .price {
    color: #ed4d41;
}
.delivery-info .price:before {
    content: '¥';
    font-size: .32rem;
    color: #ed4d41;
}
.delivery-address {
    margin-bottom: .226667rem;
}
.delivery-address .address-str {
    padding-left: .2rem;
    padding-right: .666667rem;
    line-height: .746667rem;
    font-weight: bold;
}
.delivery-address>div {
    padding: .32rem .266667rem;
}
.delivery-address .take>i, .delivery-address .give>i {
    width: .76rem;
    height: .96rem;
    text-align: center;
    line-height: .8rem;
    color: #fff;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}
.delivery-address .take>i {
    background-image: url(../assets/take_dot.png);
}
.delivery-address .give>i {
    background-image: url(../assets/give_dot.png);
}
.delivery-address .take>span, .delivery-address .give>span {
    padding-bottom: .61rem;
    width: 1.733333rem;
    line-height: .373333rem;
    font-weight: bold;
    text-align: center;
    background: url(../assets/distance.png) no-repeat center .56rem/.453333rem;
}
.take>span:before, .give>span:before {
    content: '-';
    font-size: .373333rem;
    color: #6b6b6b;
}
.order-info>p {
    padding-left: .266667rem;
    padding-right: .266667rem;
    line-height: 1.12rem;
    font-weight: bold;
}

</style>
