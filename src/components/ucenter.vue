<template>
    <div class="m-ucenter">
        <div class="head fl-row fl-jc-sb fl-ai-c">
            <div class="avatar">

            </div>
            <div class="user-info fl-gr-1">
                <p class="fs-30">编号:171219001</p>
                <p class="fs-26">13819492534</p>
            </div>
            <i class="link"></i>
        </div>
        <div class="work-states fl-row fl-ai-c fl-jc-sa"> 
            <div class="inp-check fl-row fl-ai-c"
                @click="workStates='off'">
                <i class="default" :class="{off: workStates=='off'}"></i>
                <span class="fs-30">下班</span>
            </div>
            <div class="inp-check fl-row fl-ai-c"
                @click="workStates='on'">
                <i class="default" :class="{on: workStates=='on'}"></i>
                <span class="fs-30">上班</span>
            </div>
            <div class="inp-check fl-row fl-ai-c"
                @click="workStates='busy'">
                <i class="default" :class="{busy: workStates=='busy'}"></i>
                <span class="fs-30">忙碌</span>
            </div>
        </div>
        <div>
            <zl-cell
                :title="'我的账户'"
            >
                <i class="icon-account" 
                    slot="icon"
                ></i>
            </zl-cell>
            <zl-cell
                :title="'我的订单'"
            >
                <i class="icon-order" 
                    slot="icon"
                ></i>
            </zl-cell>
            <zl-cell
                :title="'还桶记录'"
            >
                <i class="icon-bucket" 
                    slot="icon"
                ></i>
            </zl-cell>
            <zl-cell
                :title="'服务维护'"
            >
                <i class="icon-service" 
                    slot="icon"
                ></i>
            </zl-cell>
        </div>
    </div>
</template>

<script>
import ZlCell from '../base/cell'

export default {
    components: {
        ZlCell
    },
    data() {
        return {
            workStates: 'busy',
        }
    }
}
</script>

<style scoped>
.head {
    padding-top: 40px;
    padding-left: .266667rem;
    padding-right: .36rem;
    height: 2.24rem;
    background-color: #359de7;
}
.head>.link {
    width: .213333rem;
    height: .4rem;
    background: url(../assets/right_arrow_head.png) no-repeat center/contain;
}
.avatar {
    width: 1.573333rem;
    height: 1.573333rem;
    background: url(../assets/avatar_ucenter.png) no-repeat center/contain;
    border-radius: 50%
}
.user-info {
    padding-left: .213333rem;
}
.user-info>.fs-30 {
    line-height: .693333rem;
}
.user-info>.fs-26 {
    line-height: .64rem;
}
.user-info p {
    color: #fff;
}
.inp-check>.default {
    margin-right: .16rem;
    width: .64rem;
    height: .64rem;
    background: url(../assets/check_default.png) no-repeat center/contain;
}
.inp-check>.busy {
    margin-right: .16rem;
    width: .64rem;
    height: .64rem;
    background: url(../assets/work_busy.png) no-repeat center/contain;
}
.inp-check>.on {
    margin-right: .16rem;
    width: .64rem;
    height: .64rem;
    background: url(../assets/work_on.png) no-repeat center/contain;
}
.inp-check>.off {
    margin-right: .16rem;
    width: .64rem;
    height: .64rem;
    background: url(../assets/work_off.png) no-repeat center/contain;
}
.work-states {
    height: 1.76rem;
    border-bottom: .24rem solid #f2f2f2;
}
.icon-account {
    margin-right: .266667rem;
    width: .68rem;
    height: .706667rem;
    background: url(../assets/account_ucenter.png) no-repeat center/.68rem .613333rem;
}
.icon-order {
    margin-right: .266667rem;
    width: .68rem;
    height: .706667rem;
    background: url(../assets/order_ucenter.png) no-repeat center/.666667rem .64rem;
}
.icon-bucket {
    margin-right: .266667rem;
    width: .68rem;
    height: .706667rem;
    background: url(../assets/bucket_ucenter.png) no-repeat center/.6rem .706667rem;
}
.icon-service {
    margin-right: .266667rem;
    width: .68rem;
    height: .706667rem;
    background: url(../assets/service_ucenter.png) no-repeat center/.693333rem;
}
</style>
