<template>
  <ul class="v-navigation">
    <li v-for="(item, index) in nav" :key="index">
      <RouterLink :to="{ name: item.name }">{{ item.label }}</RouterLink>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ROUTES_NAME } from '@/router/constants'
export default defineComponent({
  name: 'VNavigation',
  props: {},
  emits: {},
  setup() {
    const nav = [
      {
        label: 'Дашборд',
        name: ROUTES_NAME.dashboard
      },
      {
        label: 'Авторизацыя',
        name: ROUTES_NAME.login
      },
      {
        label: 'Регистрация',
        name: ROUTES_NAME.register
      },
      {
        label: 'Страница не найдена',
        name: ROUTES_NAME.notFound
      },
      {
        label: 'Ошибка сервера',
        name: ROUTES_NAME.internetError
      }
    ]
    return { nav }
  }
})
</script>

<style lang="scss">
.v-navigation {
  display: inline-flex;
  gap: 12px;
  list-style: none;
  background-color: blue;
  border-radius: 24px 24px 0 0;
  padding: 0;
  padding-bottom: 8px;
  li {
    display: flex;
  }
  a {
    color: white;
    padding: 8px 16px;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    &:hover {
      border-bottom-color: white;
    }
  }
}
</style>
