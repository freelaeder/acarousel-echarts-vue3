<script setup >
import { ref } from 'vue';


const MAX = ref(100)
const messages = ref('messages')
</script>
<template>
<div>TestDemo2</div>
<slot :max="MAX">
  slot 1
</slot>
<header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot :max="MAX" :messages="messages"></slot>
  </main>
  <footer>
    <slot name="footer" :max="MAX + 1"></slot>
  </footer>
</template>
<style lang="" scoped>
</style>