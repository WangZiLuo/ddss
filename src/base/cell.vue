<template>
    <div class="zl-cell fl-row fl-ai-c fl-jc-sb">
        <slot name="icon">
        </slot>
        <p class="fs-30 fl-gr-1">{{title}}</p>
        <i class="link"></i>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
    .zl-cell {
        padding-left: .266667rem;
        padding-right: .36rem;
        height: 1.2rem;
        border-bottom: 1px solid #e3e3e3;
    }
    .link {
        width: .213333rem;
        height: .4rem;
        background: url(../assets/right_arrow_ucenter.png) no-repeat center/contain;
    }
</style>
