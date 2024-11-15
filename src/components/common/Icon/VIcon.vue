<template>
  <svg
    :class="className"
    :style="styles"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    v-bind="$attrs"
  >
    <title v-if="title">
      {{ title }}
    </title>
    <use :xlink:href="iconName" xmlns:xlink="http://www.w3.org/1999/xlink" />
  </svg>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { Name } from './types'

export default {
  name: 'VIcon',
  props: {
    name: { type: String as PropType<Name>, required: true },
    size: { type: [String, Number], default: '24px' },
    title: { type: String, default: '' }
  },
  data() {
    return {
      iconId: null
    }
  },
  computed: {
    styles() {
      const size = Number(this.size)

      return {
        width: Number.isNaN(size) ? this.size : `${size}px`,
        height: Number.isNaN(size) ? this.size : `${size}px`
      }
    },
    className() {
      return `v-icon v-icon--${this.name}`
    },
    iconName() {
      return `#${this.name}`
    }
  }
}
</script>

<style lang="scss">
.v-icon {
  flex-shrink: 0;
  fill: currentcolor;
  transition: fill 0.3s;
}
</style>
