<template>
    <div class="returnPail-list">
        <ul>
            <li v-for="(item, index) in returnPailList"
                :key="index">
                <div class="title-hd">
                    <p class="goods-name padd-hd fs-30">农夫山泉19升天然矿泉水桶</p>
                    <p class="goods-name padd-hd fs-30">共: 6个</p>
                </div>
                <div class="info padd-hd fl-row fl-wrap fl-jc-sb">
                    <div class="fl-gr-1 fl-row">
                        <span class="str fs-28">联&nbsp;系&nbsp;人: </span>
                        <span class="fs-28">
                            李杰
                        </span>
                    </div>
                    <div class="fl-gr-1 fl-row">
                        <span class="str fs-28">手&nbsp;机&nbsp;号: </span>
                        <span class="fs-28">18403473685</span>
                    </div>
                    <div class="fl-gr-1 fl-row">
                        <span class="str fs-28">联系地址: </span>
                        <span class="fs-28">石祥路48号</span>
                    </div>
                </div>
                <div class="btn-hd fl-row fl-jc-sb fl-ai-c padd-hd">
                    <i class="list-checkbox"
                        :class="{checked: item.checked}"
                        @click="item.checked = !item.checked">
                    </i>
                    <span class="states fs-26">未还桶</span>
                </div>
            </li>
        </ul>
        <div class="allCheckbox fl-row">
            <div class="fl-row fl-ai-c fl-gr-1">
                <i class="list-checkbox"></i>
                <span class="fs-28 all-str">全选</span>
            </div>
            <div class="btn fs-32">
                还桶
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            returnPailList: [
                {
                    checked: 0
                }, 
                {
                    checked: 1
                }
            ]
        }
    }
}

</script>

<style scoped>
.returnPail-list li {
    margin-top: .2rem;
    background-color: #fff;
}
.title-hd {
    padding-top: .266667rem;
    padding-bottom: .186667rem;
}
.goods-name {
    line-height: .773333rem;
    font-weight: bold;
}
.info {
    padding-top: .16rem;
    padding-bottom: .16rem;
    border-top: 1px solid #e2e2e2;
    border-bottom: 1px solid #e2e2e2;
}
.info>div {
    width: 4.733333rem;
}
.info span {
    line-height: .666667rem;
}
.info span.str{
    color: #656565
}
.list-checkbox {
    width: .626667rem;
    height: .626667rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-image: url(../assets/pail_checkbox.png);
}
.list-checkbox.checked {
    background-image: url(../assets/pail_checkbox_checked.png);
}
.btn-hd {
    padding-top: .133333rem;
    padding-bottom: .133333rem;
}
.states {
    line-height: .733333rem;
    color: #2d93dc;
}
.allCheckbox {
    position: fixed;
    left: 0;
    bottom: 0;
    padding-left: .266667rem;
    width: 100%;
    background-color: #fff;
}
.allCheckbox .all-str {
    margin-left: .213333rem;
    line-height: 1.253333rem;
    color: #656565;
}
.allCheckbox .btn {
    width: 2.666667rem;
    line-height: 1.253333rem;
    color: #fff;
    text-align: center;
    background-color: #2d93dc;
}
</style>
