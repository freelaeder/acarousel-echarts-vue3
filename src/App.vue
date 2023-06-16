<script setup>
// import { ref } from 'vue'
// import capitalize from '@/helps/capitalize'
// import HelloWorld from './components/HelloWorld.vue'
// import testDemo from './components/testDemo.vue'
// import { useCounterStore } from '@/stores/counter'
// import MapDemo from './components/mapDemo.vue'

// const msg = ref('dddddddddddddddddddddddddddd')
// const count = ref(0)
// const divRef = ref(null)
// const useCountr = useCounterStore()

// const deleteHandler = () => {
//   console.log('deleteHandler')
// }
// const log = () => {
//   console.log(divRef.value.counts)
// }
// useCountr.$onAction(({ name, store, args, after, onError }) => {
//   // name: 调用的 action 方法的名字
//   // args: 调用 action 时传递的参数
//   // store: store 对象
//   // after: 当 action 方法执行完成后调用为 after 传递的回调函数
//   // onError: 当 action 方法执行出错时调用为 onError 传递的回调函数
//   console.log(name, store, args, '--------------------------------------------------------')
//   if (name === 'addItems') {
//     after((result) => {
//       console.log(args)
//       console.log(store, 'store')
//       // result: action 方法的返回值
//       console.log(result)
//     })
//     onError((error) => {
//       console.log(error.message)
//     })
//   }
// })
</script>

<template>
  <!-- <h1>app{{ useCountr.count }}</h1>
  {{ capitalize(msg) }}
  <button @click="count++">{{ count }}</button>
  <button @click="log">{{ count + 100 }}</button>

  <HelloWorld ref="divRef" @delete="deleteHandler" :msg="msg" />
  <MapDemo />
  <hr />
  <testDemo /> -->
  <RouterView />
</template>

<style scoped></style>
