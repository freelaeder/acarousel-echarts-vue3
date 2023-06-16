<script setup>
import { reactive, ref } from 'vue'
const props = defineProps({
  msg: {
    type: String,
    required: false
  }
})

const counts = ref(23)
const person = reactive({name: 'John', age:23})

defineEmits(['delete'])
// 向外部暴露
defineExpose({ counts })

console.log(props,person)
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <button @click="$emit('delete')">delete</button>
  </div>
</template>

<style scoped></style>
