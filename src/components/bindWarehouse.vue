<template>
    <div class="g-container bg--color">
        <zl-head
            :title="'绑定仓库'">
        </zl-head>
        <ul class="warehouse-list">
            <li class="fl-row fl-ai-fs fl-jc-sb">
                <div class="fl-row fl-ai-fs">
                    <img src="../assets/warehouse_icon.png">
                    <div class="mar-l-24">
                        <p class="fs-32 name">中大银泰城店205号</p>
                        <p class="fs-30 subStr">管理员：张晓杰</p>
                        <p class="fs-30 subStr">电话：13819492534</p>
                    </div>
                </div>
                <i class="icon_phone fl-as-fe"></i>
            </li>
        </ul>
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
.mar-l-24 {
    margin-left: .32rem;
}
.bg--color {
    background-color: #f3f3f3;
}
.warehouse-list {
    padding-left: .266667rem;
    padding-right: .266667rem;
}
.warehouse-list li {
    margin-top: .2rem;
    padding: .293333rem .213333rem .32rem;
    background-color: #fff;
    border-radius: .133333rem; 
}
.warehouse-list li>i.icon_phone {
    width: .74rem;
    height: .74rem;
    background: url(../assets/warehouse_phone.png) no-repeat center/contain;
}
.warehouse-list .name {
    line-height: .826667rem;
    font-weight: bold;
}
.warehouse-list .subStr {
    line-height: .8rem;
}
</style>
