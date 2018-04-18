<template>
    <div class="g-container bg--color">
        <zl-head
            title="还桶记录">
        </zl-head>
        <div class="nav fl-row">
            <div class="item fl-sh-1 fs-30"
                :class="{active: navClass == 0}"
                @click="navClass = 0">
                收桶
            </div>
            <div class="item fl-sh-1 fs-30"
                :class="{active: navClass == 1}"
                @click="navClass = 1">
                还桶
            </div>
            <div class="item fl-sh-1 fs-30"
                :class="{active: navClass == 2}"
                @click="navClass = 2">
                收桶记录
            </div>
            <div class="item fl-sh-1 fs-30"
                :class="{active: navClass == 3}"
                @click="navClass = 3">
                还桶记录
            </div>
        </div>
        <get-pail-list
            v-show="navClass == 0">
        </get-pail-list>
        <return-pail-list
            v-show="navClass == 1">
        </return-pail-list>
    </div>
</template>

<script>
import ZlHead from '../base/head'
import GetPailList from '../base/getPailList'
import ReturnPailList from '../base/returnPailList'

export default {
    components: {
        ZlHead,
        GetPailList,
        ReturnPailList
    },
    data() {
        return {
            navClass: 0
        }
    }
}
</script>

<style>
.bg--color {
    background-color: #f3f3f3;
}
.nav {
    background-color: #fff;
}
.nav .item {
    width: 100%;
    line-height: 1.2rem;
    text-align: center;
}
.item.active {
    position: relative;
    color: #2d93dc;
}
.item.active:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: .026667rem;
    background-color: #2d93dc;
}
</style>

