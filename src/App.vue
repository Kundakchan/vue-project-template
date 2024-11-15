<template>
  <AppLayout>
    <RouterView />
  </AppLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'

export default defineComponent({
  name: 'App',
  components: {
    RouterView,
    AppLayout
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss"></style>
