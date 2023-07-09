<script setup lang="ts">
import { useNotificationStore } from '~/stores/nofiStore';
import { onMounted, onUnmounted, defineAsyncComponent } from 'vue';
const props = withDefaults(
    defineProps<{
        id: string
        message: string
        type?: "success" | "error"
    }>(),
    {
        type: 'success',
    }
)
const variant = computed(() => {
    return `-${props.type}`
})
const notificationStore = useNotificationStore()
const handleRemoveNoti = () => {
    notificationStore.removeNotification(props.id)
}


onMounted(() => {
    setTimeout(() => {
        handleRemoveNoti();
    }, 3000);
});

onUnmounted(() => {
    clearTimeout();
});

</script>
<template>
    <div class="hit-noti">
        <div class="notification " :class="variant">
            <p>{{ message }}</p>
            <Icon class="icon-close" @click="handleRemoveNoti" name="ion:close"></Icon>
        </div>
    </div>
</template>

<style scoped>
.hit-noti {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 10px;
    top: 0%;
    right: 0%;
    position: relative;
}
.notification {
    display: flex;
    width: 350px;
    height: 50px;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
    border-radius: 10px;
    font-size: 16px;
    font-weight: bold;
    position: relative;
    background-color: #fff;
    animation-name: slide-in;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    z-index: 100;
    margin-bottom: 6px;
    
}
@keyframes slide-in {
  from {
    left: 72%;
  }
  to {
    left: 70%;
  }
}
.notification.-success {
    background-color: green;
    color: white;
}

.notification.-error {
    background-color: red;
}

.icon-close {
    cursor: pointer;
}
</style>