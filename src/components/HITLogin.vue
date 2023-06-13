        
<script setup>
import { reactive } from 'vue';


const props = defineProps({
    initNumber: Number
})

const emit = defineEmits(['login'])

const userInfo = reactive({
    username: '',
    password: '',
})

const handleLogin = () => {
    if (userInfo.username === '' || userInfo.password === '') {
        alert('Username and password is required')
    }

    emit('login', userInfo)
}
</script>

<template>
    <section class="login-section">
        <h2 class="title">Login to HIT {{ initNumber }}</h2>
        <form action="" class="login-form">
            <div class="form-item">
                <label for="username" class="label">Username</label>
                <input type="text" v-model="userInfo.username" class="input" id="username">
            </div>
            <div class="form-item">
                <label for="password" class="label">Password</label>
                <input type="password" v-model="userInfo.password" class="input" id="password">
            </div>
            <button type="button" class="login-button" @click="handleLogin">Login</button>
        </form>
    </section>
</template>

<style scoped>
.login-section {
    margin-top: 50px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.login-section>.login-form {
    min-width: 30%;
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.login-section>.login-form>.login-button {
    background-color: orange;
    border: 1px solid #cccccc;
    padding: 8px 16px;
    border-radius: 5px;
}

.login-section>.login-form>.form-item {
    display: flex;
    flex-direction: column;
}

.login-section>.login-form>.form-item>.label {
    text-align: left;
}

.login-section>.login-form>.form-item>.input {
    padding: 8px 16px;
    border-radius: 5px;
    border: 1px solid #cccccc;
}
</style>