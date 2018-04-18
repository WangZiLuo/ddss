<template>
    <div class="head fl-row fl-ai-c"
        :style="styleObject"
        :class="iconClass">
        <i class="head_icon f-extend-click">
        </i>
        <p class="head_title fs-32">{{title}}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: null
        },
        styleObject: {
            type: Object,
            default: function() {
                return {
                    backgroundColor: '#2d93dc'
                }
            } 
        }
    },
    data() {
        return {
            iconClass: 'white'
        }
    },
    watch: {
        styleObject: {
            handler(val, oldVal) {
                console.log(val)

                // if (val.backgroundColor == '#fff') {
                //     this.iconClass = 'black'
                // } else {
                //     this.iconClass = 'white'
                // }
            },
            deep: true
        }
    },
    created() {
        if (this.styleObject.backgroundColor == '#fff') {
            this.iconClass = 'black'
        } else {
            this.iconClass = 'white'
        }
    }
}
</script>

<style scoped>
.head_icon {
    padding-left: .266667rem;
    padding-right: .266667rem;
    width: .213333rem;
    height: .4rem;
}
.white .head_icon {
    background: url(../assets/head_back_white.png) no-repeat center/contain;
}
.black .head_icon {
    background: url(../assets/head_back_black.png) no-repeat center/contain;
}
.head_title {
    width: 8.453333rem;
    line-height: 1.173333rem;
    text-align: center;
}
.white .head_title {
    color: #fff;
}
.black .head_title {
    color: #333;
}
</style>
