<template>
    <div class="commentList">
        <ul class="comment-list">
            <li class="fl-row fl-ai-fs bor-t">
                <div class="comment-list_avatar fl-sh-0">
                    <img src="../assets/comment_avatar.jpg">
                </div>
                <div>
                    <p class="nickname fs-28">匿名</p>
                    <little-stars
                        :stars-num="5">
                    </little-stars>
                    <p class="str fs-28">评论关注日常新闻评论，提炼媒体精辟评论，呈现每日最新观点。精品栏目：搜狐论座、非新闻观察家。 搜狐新闻评论频道。</p>
                </div>
            </li>
        </ul>
    </div>

</template>

<script>
import LittleStars from '../base/littleStars'

export default {
    components: {
        LittleStars
    },
    data() {
        return {

        }
    }
}

</script>

<style scoped>
.comment-list {
    padding-left: .266667rem;
    padding-right: .266667rem;
    background-color: #fff;
}
.comment-list_avatar {
    margin-right: .266667rem;
    width: 1.133333rem;
    height: 1.133333rem;
    border-radius: 50%;
    overflow: hidden;
}
.comment-list_avatar>img {
    width: 100%;
}
.comment-list>li {
    padding-top: .213333rem;
    padding-bottom: .373333rem;
}
.comment-list .nickname {
    line-height: .613333rem;
}
.comment-list .str {
    line-height: .586667rem;
}
</style>
