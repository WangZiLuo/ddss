<template>
    <div class="g-container">
        <zl-head
            :title="'选择取货门店'">
        </zl-head>
        <div class="fl-gr-1 bg-color">
            <ul class="eventList">
                <li class="fl-row fl-ai-c" 
                    v-for="(item, index) in eventList"
                    :key="index"
                    :class="{checked : checkIndex==index}"
                    @click="checkIndex = index">
                    <i class="icon fl-sh-0"></i>
                    <span class="fs-30 fl-gr-1">{{item}}</span>
                    <i class="checkbox fl-sh-0">
                    </i>
                </li>
            </ul>
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
            eventList: ['中大银泰城店205号', '中大银泰城店205号', '中大银泰城店205号', '浙江省杭州市西湖区天目山路518号西溪国 家湿地公园']
        }
    }
}
</script>

<style scoped>
.bg-color {
    background-color: #f7f7f7;
}
.icon {
    width: .533333rem;
    height: .666667rem;
    background: url(../assets/store_location.png) no-repeat center/contain;
}
.checkbox {
    width: .666667rem;
    height: .666667rem;
    background-image: url(../assets/store_checkbox.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}
.eventList li.checked {
    background-color: #f7f7f7;
}
.checked>i.checkbox {
    background-image: url(../assets/store_checkbox_checked.png);
}

.eventList>li {
    margin-top: .2rem;
    padding: .266667rem;
    background-color: #fff;
}
.eventList>li i {
    margin-right: .32rem;
}
.eventList>li span {
    padding-right: .266667rem;
    line-height: .64rem;
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
