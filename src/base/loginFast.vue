<template> 
    <div class="m-login-fast">
        <div class="inp-cell fl-row fl-jc-fs fl-ai-c">
            <i class="inp-icon phone fl-sh-0"></i>
            <input class="fl-gr-1 fs-30" type="tel" placeholder="手机号"
                v-model="request.phone">
        </div>
        <div class="fl-row mar-top--45 fl-sb">
            <div class="inp-cell short fl-row fl-jc-fs fl-ai-c">
                <i class="inp-icon code"></i>
                <input class="fs-30" placeholder="验证码"
                    type="text"
                    v-model="request.code">
            </div>
            <div class="inp-point fs-30 fl-sh-0">
                获取验证码
            </div>
        </div>
        <div class="btn fs-30"
            :class="{light: btnStyle}">
            登录
        </div>
        <div class="login-tips fl-row fl-jc-sb">
            <span class="fs-26">
                密码登录?
            </span>
            <span class="fs-26">
                忘记密码?
            </span>
        </div>
    </div>
</template>

<script>

export default {
    components: {
        
    },
    data() {
        return {
            isShowPassword: false,
            request: {
                phone: null,
                code: null,
            }
        }
    },
    computed: {
        btnStyle() {
            if (this.request.phone && this.request.code) {
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
        width: .84rem;
        height: .586667rem;
        background-repeat: no-repeat;
    }
    .inp-icon.phone {
        background-image: url(../assets/login_user.png);
        background-position: left center;
        background-size: contain;
    }
    .inp-icon.code {
        background-image: url(../assets/login_code.png);
        background-position: left center;
        background-size: contain;
    }
    .inp-point .icon {
        width: .68rem;
        height: .506667rem;
    }
    .inp-cell {
        box-sizing: border-box;
        padding: .32rem;
        background-color: #fff;
        border-radius: .106667rem;
        box-shadow: 0 3px .133333rem #ececec;
    }
    .inp-cell.short {
        width: 5.866667rem;
    }
    .inp-cell input {
        padding-left: .266667rem;
        line-height: .573333rem;
        min-width: 1.333333rem;
        border-left: 1px solid #bebebe;
    }
    .inp-point {
        margin-left: .213333rem;
        width: 2.853333rem;
        line-height: 1.2rem;
        text-align: center;
        background-color: #e1e1e1;
        border-radius: .106667rem;
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