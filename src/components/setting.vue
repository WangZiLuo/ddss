<template>
    <div class="g-container bg--color">
        <zl-head
            :title="'设置'">
        </zl-head>
        <div>
            <div class="fl-row fl-jc-sb fl-ai-c cell">
                <span class="fs-30">
                    更换头像
                </span>
                <div class="img_tpl">
                    <img src="../assets/setting_avatar.png">
                </div>
            </div>
            <div class="fl-row fl-jc-sb fl-ai-c cell">
                <span class="fs-30">
                    编号
                </span>
                <span class="fs-30">
                    20080111001
                </span>
            </div>
            <div class="fl-row fl-jc-sb fl-ai-c cell">
                <span class="fs-30">
                    手机号
                </span>
                <span class="fs-30">
                    1381981024
                </span>
            </div>
            <div class="fl-row fl-jc-sb fl-ai-c cell">
                <span class="fs-30">
                    修改密码
                </span>
                <i class="link"></i>
            </div>
        </div>
        <div class="btn fs-32">
            退出
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

<style scoped>
.bg--color {
    background-color: #f3f3f3;
}
.cell {
    margin-bottom: .2rem;
    padding: .213333rem .266667rem;
    background-color: #fff;
}
.cell>span {
    line-height: .773333rem;
}
.cell .img_tpl {
    width: 1.173333rem;
    height: 1.173333rem;
    border-radius: 50%;
    overflow: hidden;
}
.cell .img_tpl>img {
    width: 100%;
}
.cell .link {
    width: .213333rem;
    height: .4rem;
    background: url(../assets/right_arrow_ucenter.png) no-repeat center/contain;
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
