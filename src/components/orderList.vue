<template>
    <div>
        <ul>
            <li class="box-shadow"></li>
            <li class="listItem"
                v-for="(item, index) in orderList"
                :key="index">
                <div class="choose-warehouse fl-row fl-ai-c fl-jc-sb">
                    <span class="fs-28">选择门店</span>
                    <div class="fl-row fl-ai-c">
                        <span class="fs-28">{{item.warehouse}}</span>
                        <i class="link"></i>
                    </div>
                </div>
                <div class="hd">
                    <div class="goods">
                        <div class="fl-row fl-jc-fs fl-ai-b">
                            <p class="fs-32">{{item.goods[0].name}}</p>
                            <span class="amount fs-30">{{item.goods[0].amount}}</span>
                        </div>
                        <div class="ellipsis fs-30" v-if="item.goods.length>1">
                            ···
                        </div>
                    </div>
                    <div class="location">
                        <div class="take fl-row fl-jc-fs fl-ai-b">
                            <i class="icon fs-22 color-whi">取</i>
                            <p class="fs-30">{{ item.takeAddress }}</p>
                        </div>
                        <div class="send fl-row fl-jc-fs fl-ai-b">
                            <i class="icon fs-22 color-whi">送</i>
                            <p class="fs-30">{{ item.sendAddres }}</p>
                        </div>
                    </div>
                    <div class="info fl-row fl-ai-c fl-jc-c">
                        <div class="distance" style="margin-right: 1.146667rem;">
                            <span class="txt fs-32">距离: </span>
                            <span class="num fs-32 color-2d9">{{ item.distance }}km</span>
                        </div>
                        <div class="money">
                            <span class="txt fs-32">{{ payStates(item.states) }}</span>
                            <span class="num fs-32 color-ed4">{{ item.money }}元</span>
                        </div>
                    </div>
                    <div class="btn fs-32">
                        立即抢单
                    </div>
                </div>
            </li>
        </ul>
        <div class="btn-refresh fl-row fl-ai-c fl-jc-c">
            <i></i>
            <span class="fs-34" style="margin-left: .093333rem;">刷新</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            orderList: [
                {
                    warehouse: '中大银泰城店205号',
                    goods: [
                        {
                            name: '农夫山泉19升饮用天然矿泉水',
                            amount: 5
                        }
                    ],
                    states: 1,
                    takeAddress: '中大银泰城店205号',
                    sendAddres: '石祥路48号5层808',
                    distance: 12.5,
                    money: 89
                }
            ]
        }
    },
    methods: {
        payStates(states) {
            if (states==1) {
                return '未付: '
            } else if (states==2) {
                return '已付: '
            }
            
        }
    }
}
</script>

<style scoped>
ul {
    padding-bottom: 1.333333rem;
}
.listItem {
    padding-bottom: .373333rem;
}
.choose-warehouse {
    padding-left: .266667rem;
    padding-right: .266667rem;
    height: .933333rem;
    border-bottom: 1px solid #e2e2e2;
}
.link {
    margin-left: .133333rem;
    width: .186667rem;
    height: .346667rem;
    background: url(../assets/right_arrow.png) no-repeat center/contain;
}
.hd {
    padding-left: .266667rem;
    padding-right: .266667rem;
}
.goods {
    font-weight: bold;
}
.goods .fs-32 {
    line-height: .933333rem;
}
.goods .amount {
    margin-left: .133333rem;
    line-height: .4rem;
}
.goods .ellipsis {
    line-height: .186667rem;
}
.goods .amount:before {
    content: 'x';
    font-size: .32rem;
    line-height: .32rem;
}
.icon {
    margin-right: .08rem;
    font-weight: bold;
    line-height: .76rem;
    text-align: center;
}
.take>.icon {
    width: .76rem;
    height: .76rem;
    background: url(../assets/take.png) no-repeat center left/contain;
}
.send>.icon {
    width: .76rem;
    height: .76rem;
    background: url(../assets/send.png) no-repeat center left/contain;
}
.location {
    border-bottom: 1px solid #e2e2e2;
}
.location .take, .location .send {
    height: .96rem;
}
.info .txt, .info .num {
    font-weight: bold;
    line-height: 1.133333rem;
}
.btn {
    background-color: #2d93dc;
    text-align: center;
    line-height: 1.173333rem;
    color: #fff;
    border-radius: .08rem;
}
.box-shadow {
    padding-top: 1px;
    box-shadow: 2px 2px 10px #333;
}
.btn-refresh {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1.333333rem;
    background-color: #ed4d41;
    text-align: center;
    color: #fff;
}
.btn-refresh>i {
    width: .693333rem;
    height: .64rem;
    background: url(../assets/refresh.png) no-repeat center/contain;
}
</style>
