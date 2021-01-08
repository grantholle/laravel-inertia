import { reactive } from 'vue'
import { nanoid } from 'nanoid'

export default {
  state: reactive({
    notifications: []
  }),


  addNotification (notification, delay = 4000) {
    const id = `id_${nanoid()}`

    this.state.notifications.splice(0, 0, {
      ...notification,
      id,
    })

    setTimeout(() => this.removeNotification(id), delay)
  },

  removeNotification (id) {
    const index = this.state.notifications.findIndex(n => n.id === id)

    this.state.notifications.splice(index, 1)
  }
}
