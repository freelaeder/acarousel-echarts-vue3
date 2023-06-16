import {
  ref,
  computed,
  reactive
} from 'vue'
import {
  defineStore,
  acceptHMRUpdate
} from 'pinia'
import {
  useProductStore
} from './productStore'

export const useCounterStore = defineStore('counter', () => {

  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  let posts = reactive([])
  const products = useProductStore()
  let name = ref('product')

  const allCountandProd = computed(() => products.pCount + count.value)

  function increment() {
    count.value++
  }
  // 获取所有的数据
  const allCounts = computed(() => posts.length)
  // 是否为空
  const isEmpty = computed(() => posts.length === 0)

  // getposts index
  async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json()
    console.log(data, 'data');
    posts.push(...data)
  }
  // delete posts
  function deletePosts(id) {
    console.log(id, 'delete');
    posts.splice(id, 1)
  }


  return {
    count,
    doubleCount,
    posts,
    allCounts,
    isEmpty,
    allCountandProd,
    name,
    increment,
    getPosts,
    deletePosts
  }
})

if (
  import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore,
    import.meta.hot));
}