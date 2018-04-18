<template>
    <div class="g-container">
        <zl-head
            :title="'在线时间'">
        </zl-head>
        <div>
            <div class="time-title fl-row fl-jc-sb fl-ai-c">
                <span class="fs-30">
                    2017年12月12日
                </span>
                <i class="icon_calendar">
                </i>
            </div>
            <ul class="recording-list">
                <li class="recording-item padd-hd">
                    <div class="fl-row fl-jc-sb">
                        <span class="fs-32">
                            在线时间:
                        </span>
                        <span class="fs-32">
                            50分钟
                        </span>
                    </div>
                    <p class="fs-30">
                        16:00-16:50
                    </p>
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
    }
}
</script>

<style scoped>
.time-title {
    padding-left: .266667rem;
    padding-right: .266667rem;
    background-color: #e8e8e8;
}
.time-title span {
    line-height: .933333rem;
    color: #656565;
}
.icon_calendar {
    width: .64rem;
    height: .653333rem;
    background: url(../assets/online_calendar.png) no-repeat center/contain;
}
.recording-item {
    border-bottom: 1px solid #d8d8d8;
}
.recording-item span {
    line-height: 1.133333rem;
    font-weight: bold;
}
.recording-item p {
    line-height: .933333rem;
    color: #9d9d9d;
}
</style>
