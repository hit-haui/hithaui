<script setup>
    import { reactive } from 'vue';
    import router from '../routers/Router'
    const userInfo = reactive({
        username: '',
        password: '',
    })
    const handleLogin = () => {
        if (userInfo.username === 'vancuong' || userInfo.password === '442002') {
            router.push('/')
        }
    }
</script>
<template>
    <div class="login">
        <form action="" class="login-form">
            <img class="login-logo" src="../assets/logoHIT.png" alt="">
            <h2 class="login-title">Đăng nhập</h2>
            <div class="form-item">
                <label for="username" class="label">Username:</label>
                <input type="text" placeholder="Username" v-model="userInfo.username" class="input" id="username">
            </div>
            <div class="form-item">
                <label for="password" class="label">Password:</label>
                <input type="password" placeholder="Password" v-model="userInfo.password"  class="input" id="password">
            </div>
            <button type="button" @click="handleLogin" class="login-button">Đăng nhập</button>
        </form>
    </div>
</template>



<style  scoped>
.login {

    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(111.03deg, #C5F9D7 13.6%, #F7D486 59.19%, #FF9294 103.27%);
    mix-blend-mode: normal;
}

.login>.login-form {
    position: relative;
    width: 560px;
    height: 660px;
    background: #FFFFFF;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.login-form>.login-logo {
    position: absolute;
    top: -3%;
    left: -1%;
}

.login-form>h2 {
    font-weight: 700;
    font-size: 36px;
    color: #303030;
    margin-bottom: 20px;
}

.login-form>.form-item {
    display: flex;
    flex-direction: column;
}

.login-form>.form-item label {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 5px;

}

.login-form>.form-item>input {
    width: 380px;
    height: 54px;
    background: #F5F5F5;
    border-radius: 25px;
    border: none;
    margin-bottom: 10px;
    padding-left: 20px;
}

/* input::placeholder{
        padding-left: 20px;
        font-weight: 600;
    } */
.login-form>.login-button {
    margin-top: 20px;
    width: 220px;
    height: 64px;
    background: linear-gradient(74.62deg, #FDC830 8.22%, #F37335 92.59%);
    border-radius: 160px;
    border: none;
    font-weight: 700;
    font-size: 24px;
    color: #FFFFFF;
    cursor: pointer;
}</style>