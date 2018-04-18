<template>
    <div class="g-container bg-color">
        <div class="boundary">
            <div class="logo fl-row fl-jc-c fl-ai-c">
                <img src="../assets/logo.png" alt="">
            </div>
            <!-- <login-password>
            </login-password> -->
            <login-fast>
            </login-fast>
        </div>
    </div>
</template>

<script>
import LoginPassword from '../base/loginPassword'
import LoginFast from '../base/loginFast'

export default { 
    components: {
        LoginPassword,
        LoginFast
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
</style>