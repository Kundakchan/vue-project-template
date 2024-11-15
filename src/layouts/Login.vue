<template>
  <main>
    <VNavigation />
    <section>LayoutLogin</section>
    <slot />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VNavigation from '@/components/VNavigation.vue'
export default defineComponent({
  name: 'LayoutLogin',
  props: {},
  components: {
    VNavigation
  },
  emits: {},
  setup() {
    return {}
  }
})
</script>

<style lang="scss"></style>
