<template>
    <div>
        <zl-head
            :style-object="headColor"
            :title="'重设密码'">
        </zl-head>
        <div class="m-reset-password">
            <div class="inp-cell mar-top--98 fl-row fl-jc-fs fl-ai-c">
                <input class="fl-gr-1 fs-30" type="tel" placeholder="手机号"
                    v-model="request.phone">
            </div>
            <div class="inp-cell mar-top--24 fl-row fl-jc-fs fl-ai-c">
                <input class="fl-gr-1 fs-30" placeholder="验证码"
                    type="text"
                    v-model="request.code">
                <span class="inp-btn fs-30">
                    获取验证码
                </span>
            </div>
            <div class="inp-cell mar-top--24 fl-row fl-jc-fs fl-ai-c">
                <input class="fl-gr-1 fs-30" placeholder="重设密码"
                    :type="[isShowPassword ? 'text' : 'password']"
                    v-model="request.password">
                <div class="inp-point fl-row fl-jc-c fl-ai-c">
                    <i class="icon password--hide"
                        :class="[isShowPassword ? 'password--show' : 'password--hide']"
                        @click="togglePasswordShow">
                    </i>
                </div>
            </div>
            <div class="btn fs-30"
                :class="{light: btnStyle}">
                确认
            </div>
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
            isShowPassword: false,
            headColor: {
                backgroundColor: '#fff'
            },
            request: {
                phone: null,
                code: null,
                password: null,
            }
        }
    },
    computed: {
        btnStyle() {
            if (this.request.phone && this.request.password && this.request.code) {
                return true
            } else {
                return false
            }
        }
    },
    methods: {
        togglePasswordShow() {
            this.isShowPassword = !this.isShowPassword
        }
    }
}

</script>

<style scoped>
    .m-reset-password {
        padding-left: .88rem;
        padding-right: .88rem;
    }
    .bg-color {
        background-color: #f0f0f0;
    }
    .boundary {
        padding-left: .533333rem;
        padding-right: .533333rem;
    }
    .logo {
        box-sizing: border-box;
        padding-top: .56rem;
        height: 5.146667rem;
    }
    .logo>img {
        width: 3.76rem;
        height: 2.72rem;
    }
    .inp-icon {
        margin-right: .333333rem;
        display: inline-block;
        width: .506667rem;
        height: .586667rem;
        background-repeat: no-repeat;
    }
    .inp-icon.phone {
        background-image: url(../assets/login_user.png)
    }
    .inp-icon.password {
        background-image: url(../assets/password_user.png)
    }
    .inp-point .icon {
        width: .68rem;
        height: .506667rem;
    }
    .inp-btn {
        padding-left: .293333rem;
        padding-right: 22px;
        line-height: .906667rem;
        background-color: #e1e1e1;
        border-radius: .106667rem;
    }
    .icon.password--hide {
        background: url(../assets/noshow_password.png) no-repeat center/contain;
    }
    .icon.password--show {
        background: url(../assets/show_password.png) no-repeat center/contain;
    }
    .inp-cell {
        background-color: #fff;
        border-bottom: 2px solid #858585;
    }
    .inp-cell input {
        padding-right: .32rem;
        line-height: 1.173333rem;
    }
    .inp-point {
        width: 1.333333rem;
    }
    .mar-top--24 {
        margin-top: .32rem;
    }
    .mar-top--98 {
        margin-top: 1.306667rem;
    }
    .btn {
        margin-top: 1.666667rem;
        line-height: 1.2rem;
        color: #fff;
        text-align: center;
        background-color: #6db2e3;
        border-radius: .106667rem;
    }
    .btn.light {
        background-color: #2d93dc;
    }
    .login-tips>span {
        line-height: .773333rem;
        color: #2d93dc;
    }
</style>