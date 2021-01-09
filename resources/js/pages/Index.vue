<template>
  <div class="max-w-xl mx-auto px-4 pt-16 pb-12 min-h-screen text-gray-800">
    <h1 class="font-bold text-2xl leading-5 mb-8">Laravel Inertia Starter</h1>
    <p class="text-lg mb-4">A Laravel starter with Inertia and some components to get you started.</p>

    <div class="mb-2">
      <app-button @click="addSuccess" color="green">Success</app-button>
    </div>
    <div>
      <app-button @click.prevent="addError" color="red">Error</app-button>
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
    addSuccess () {
      this.$success('This is a success!')
    },

    addError () {
      this.$error('This is an error!')
    }
  }
})
</script>
