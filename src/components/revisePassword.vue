<template>
    <div class="g-container bg--color">
        <zl-head
            :title="'修改密码'">
        </zl-head>
        <div>
            <div class="fl-row fl-ai-c inp-cell">
                <span class="fs-30">
                    旧&nbsp;密&nbsp;码
                </span>
                <input class="fs-30" type="text" placeholder="输入旧密码">
            </div>
            <div class="fl-row fl-ai-c inp-cell">
                <span class="fs-30">
                    新&nbsp;密&nbsp;码
                </span>
                <input class="fs-30" type="text" placeholder="输入新密码">
            </div>
            <div class="fl-row fl-ai-c inp-cell">
                <span class="fs-30">
                    确认密码
                </span>
                <input class="fs-30" type="text" placeholder="再次输入新密码">
            </div>
        </div>
        <div class="btn fs-32">
            完成
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
    background-color: #f5f5f5;
}
.inp-cell {
    margin-top: .213333rem;
    padding-left: .266667rem;
    padding-right: .266667rem;
    background-color: #fff;
}
.inp-cell span {
    line-height: 1.2rem;
}
.inp-cell input {
    margin-left: .426667rem;
    line-height: .4rem;
}
.btn {
    margin-left: .266667rem;
    margin-right: .266667rem;
    margin-top: 2.56rem;
    line-height: 1.173333rem;
    color: #fff;
    text-align: center;
    background-color: #a6a6a6;
    border-radius: .106667rem;
}
</style>
