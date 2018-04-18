<template>
    <div>
        <ul class="fl-row fl-ai-c stars-list">
            <li class="stars"
                v-for="(item, index) in starsNum"
                :key="index">
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    props: {
        starsNum: {
            type: Number,
            default: 0
        }
    }
}

</script>

<style scoped>
.stars-list {
    margin-bottom: .16rem;
    padding-top: 2px;
    padding-bottom: 2px;
}
.stars {
    margin-right: .16rem;
    width: .386667rem;
    height: .373333rem;
    background: url(../assets/little_stars.png) no-repeat center/contain;
}

</style>
