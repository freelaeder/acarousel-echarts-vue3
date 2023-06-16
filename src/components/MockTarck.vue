<script setup >
import { inject, onMounted,onUnmounted,ref } from 'vue';

const x = ref(0)
const y = ref(0)
const update = e => {
   x.value = e.pageX,
   y.value = e.pageY
}

const rootname = inject('rootNames','root')

onMounted(( ) => window.addEventListener("mousemove",update))
onUnmounted(( ) => window.removeEventListener("mousemove",update))
</script>
<template>
<div>MockTarck</div>
<slot  :x="x" :y="y"></slot>
<p>rootname---{{ rootname }}</p>
</template>
<style lang="" scoped>
</style>