import { Notification } from "~/types"
export const useNotificationStore = defineStore('notification', () => {
    const notifications = ref<Notification[]>([])

    const addNotification = (notification: Notification) => {
        notifications.value.push(notification)
    }

    const removeNotification = (id: string) => {
        notifications.value = notifications.value.filter((item) => item.id !== id);
    }
    return { addNotification, removeNotification, notifications }
})
