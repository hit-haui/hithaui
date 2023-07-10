import type { CreateNotificationData } from '~/types/notifications'
import { useNotificationStore } from '~/stores/notifications'

export function useNotification(notification: CreateNotificationData) {
  const notificationStore = useNotificationStore()
  const { addNotification } = notificationStore

  return addNotification(notification)
}
