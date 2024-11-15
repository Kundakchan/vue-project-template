<template>
  <main>
    <VNavigation />
    <section>LayoutDefault</section>
    <slot />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VNavigation from '@/components/VNavigation.vue'
export default defineComponent({
  name: 'LayoutDefault',
  components: {
    VNavigation
  },
  props: {},
  emits: {},
  setup() {
    return {}
  }
})
</script>

<style lang="scss"></style>
