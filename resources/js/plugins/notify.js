import store from '@/stores/notifications'

export default {
  install (app, config = { delay: 4000 }) {
    const notify = (notification, delay) => {
      store.addNotification(notification, delay || config.delay)
    }

    // Generic call
    app.config.globalProperties.$notify = notify

    // Success notification
    app.config.globalProperties.$success = (text, delay) => {
      notify({
        level: 'success',
        text
      }, delay)
    }

    // Error notification
    app.config.globalProperties.$error = (text, delay) => {
      notify({
        level: 'error',
        text
      }, delay)
    }
  }
}
