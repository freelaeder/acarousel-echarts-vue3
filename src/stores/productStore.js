import {
  defineStore
} from "pinia";
import {
  ref
} from 'vue'
// 返回函数 
export const useProductStore = defineStore('productStore', () => {
  const count = ref(0)
  let msg = ref('Product store')
  let pCount = ref(23)

  function increment() {
    count.value++
  }

  function changeMsg() {
    msg.value = 'freedom'
  }

  return {
    count,
    msg,
    pCount,
    increment,
    changeMsg
  }
})