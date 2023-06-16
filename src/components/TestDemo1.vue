<script setup >
import { useAttrs } from 'vue';

const props = defineProps(["name","title","title1"])
defineEmits(["update:title","update:title1"])
const attr = useAttrs()
console.log(props.name,attr);
</script>
<template>
<div>TestDemo1</div>
<p>name---{{props.name  }}</p>
<input type="text" placeholder="title"  :value="title" @input="$emit('update:title',$event.target.value)" />
<input type="text" placeholder="title1" :value="title1" @input="$emit('update:title1',$event.target.value)" />
<p v-bind="$attrs">attrs=-----{{ $attrs }}</p>
</template>
<style  scoped>
</style>