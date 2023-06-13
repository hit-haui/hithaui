        
<script setup>

const props = defineProps({
    initNumber: Number
})

const emit = defineEmits(['login'])

</script>

<template>
    <section class="login-section">
        <h2 class="title">Login to HIT {{ initNumber }}</h2>
        <button class="login-button" @click="emit('login')">Login</button>
    </section>
</template>

<style scoped>
.login-section {
    margin-top: 50px;
    text-align: center;
}

.login-section>.login-button {
    background-color: orange;
    border: 1px solid #cccccc;
    padding: 8px 16px;
    border-radius: 5px;
}
</style>