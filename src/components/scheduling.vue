<template>
    <div class="g-container">
        <zl-head
            :title="'申请调度'">
        </zl-head>
        <div class="fl-gr-1 bg-color">
            <ul class="eventList">
                <li class="fl-row fl-ai-c" v-for="(item, index) in eventList"
                    :key="index"
                    :class="{checked : checkIndex==index}"
                    @click="checkIndex = index">
                    <i class="checkbox">
                    </i>
                    <span class="fs-30">{{item}}</span>
                </li>
            </ul>
            <div class="sch-text">
                <p class="fs-30">备注说明</p>
                <textarea class="fs-28">

                </textarea>
            </div>
        </div>
        <div class="btn-sub fs-30">
            提交申请
        </div>
    </div>
</template>

<script>
import ZlHead from '../base/head'

export default {
    components: {
        ZlHead
    },
    data() {
        return {
            checkIndex: null,
            eventList: ['电动车突然坏了', '电动车没电了', '电动车突然坏了', '电动车没电了']
        }
    }
}
</script>

<style scoped>
.bg-color {
    background-color: #f7f7f7;
}
.checkbox {
    width: .613333rem;
    height: .613333rem;
    background-image: url(../assets/checkbox_default.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}
.eventList li.checked {
    background-color: #f7f7f7;
}
.checked>i {
    background-image: url(../assets/checkbox_checked.png);
}

.eventList>li {
    padding-left: .266667rem;
    padding-right: .266667rem;
    background-color: #fff;
    border-bottom: 1px solid #e7e7e7;
}
.eventList>li i {
    margin-right: .32rem;
}
.eventList>li span {
    line-height: 1.333333rem;
}
.sch-text {
    border-top: .2rem solid #f7f7f7;
}
.sch-text {
    padding-left: .266667rem;
    padding-right: .266667rem;
    padding-bottom: .533333rem;
    background-color: #fff;
}
.sch-text>p {
    line-height: 1.066667rem;
}
.sch-text>textarea {
    box-sizing: border-box;
    padding: .133333rem;
    width: 8rem;
    height: 1.6rem;
    line-height: .4rem;
    border: 1px solid #e7e7e7;
}
.btn-sub {
    position: fixed;
    left: .266667rem;
    right: .266667rem;
    bottom: 1.866667rem;
    line-height: 1.173333rem;
    color: #fff;
    text-align: center;
    background-color: #2d93dc;
    border-radius: .106667rem;
}
</style>

