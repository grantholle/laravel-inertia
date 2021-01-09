<template>
  <div class="max-w-xl mx-auto px-4 pt-16 pb-12 min-h-screen text-gray-800">
    <h1 class="font-bold text-2xl leading-5 mb-8">Laravel Inertia Starter</h1>
    <p class="text-lg mb-4">A Laravel starter with Inertia and some components to get you started.</p>

    <h2 class="text-xl font-bold mb-2">Notifications</h2>
    <div class="space-y-2">
      <div>
        <app-button @click="notify('This is a success!', 'success')" color="green">Success</app-button>
      </div>
      <div>
        <app-button @click.prevent="notify('This is an error!', 'error')" color="red">Error</app-button>
      </div>
      <div>
        <app-button @click.prevent="notify('This is a warning!', 'warning')" color="yellow">Warning</app-button>
      </div>
      <div>
        <app-button @click.prevent="notify('This is neutral!')" color="neutral">Neutral</app-button>
      </div>
    </div>
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
    notify (text, level) {
      this.$notify({
        text,
        level,
      })
    },
  }
})
</script>
