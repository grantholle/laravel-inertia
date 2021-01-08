<template>
  <div>
    <button @click.prevent="addSuccess">Success</button>
    <button @click.prevent="addError">Error</button>
    <notifications />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Notifications from '@/components/Notifications'

export default defineComponent({
  components: {
    Notifications
  },

  methods: {
    addSuccess () {
      console.log(this.$success)
      this.$success('This is a success!')
    },

    addError () {
      this.$error('This is an error!')
    }
  }
})
</script>
