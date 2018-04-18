<template> 
    <div class="m-login-password">
        <div class="inp-cell fl-row fl-jc-fs fl-ai-c">
            <i class="inp-icon phone fl-sh-0"></i>
            <input class="fl-gr-1 fs-30" type="tel" placeholder="手机号"
                v-model="request.phone">
        </div>
        <div class="inp-cell mar-top--45 fl-row fl-jc-fs fl-ai-c">
            <i class="inp-icon password fl-sh-0"></i>
            <input class="fl-gr-1 fs-30" placeholder="密码"
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
            登录
        </div>
        <div class="login-tips fl-row fl-jc-sb">
            <span class="fs-26">
                免码快捷登录?
            </span>
            <span class="fs-26">
                忘记密码?
            </span>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            isShowPassword: false,
            request: {
                phone: null,
                password: null,
            }
        }
    },
    computed: {
        btnStyle() {
            if (this.request.phone && this.request.password) {
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
    .icon.password--hide {
        background: url(../assets/noshow_password.png) no-repeat center/contain;
    }
    .icon.password--show {
        background: url(../assets/show_password.png) no-repeat center/contain;
    }
    .inp-cell {
        padding: .32rem;
        background-color: #fff;
        border-radius: .106667rem;
        box-shadow: 0 3px .133333rem #ececec;
    }
    .inp-cell input {
        padding-left: .266667rem;
        line-height: .573333rem;
        border-left: 1px solid #bebebe;
    }
    .inp-point {
        width: 1.333333rem;
    }
    .mar-top--45 {
        margin-top: .6rem;
    }
    .btn {
        margin-top: 1.2rem;
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