<script setup>
import { useProductStore } from '../stores/productStore'
import { useCounterStore } from '../stores/counter'
import { storeToRefs } from 'pinia'
import TestDemo1 from './TestDemo1.vue'
import { ref } from 'vue'
import TestDemo2 from './TestDemo2.vue'
import MockTarck from './MockTarck.vue'
const product = useProductStore()
const posts = useCounterStore()
// const { msg } = product
console.log(posts, 'post')
const res = () => {
  posts.$reset()
}
const { posts: postsList } = storeToRefs(posts)
console.log(postsList, 'postlist')

const c = storeToRefs(useProductStore())
const uname = ref('free uname')
const uname2 = ref('free uname2')
const uname3 = ref('free uname3')
</script>
<template>
  <div @click="product.changeMsg">{{ c.msg }}</div>
  <button @click="product.increment">{{ product.count }}</button>
  <button @click="posts.getPosts">get posts</button>
  <button @click="res">clear store</button>
  <h1>allCounts------{{ posts.allCountandProd }}</h1>
  <button
    @click="
      posts.$patch({
        count: 23
      })
    "
  >
    add posts
  </button>
  <h1>总数量{{ posts.allCounts }}</h1>
  <h1>是否为空{{ posts.isEmpty ? '空的' : '有值' }}</h1>

  <ul>
    <li v-for="(item, index) in postsList" :key="item.id">
      {{ item.title }} <button @click="posts.deletePosts(index)">delete one posts</button>
    </li>
  </ul>

  <hr />
  <TestDemo1 class="hh" :name="uname" v-model:title="uname2" v-model:title1="uname3" />
  <p>uname2----- {{ uname2 }}</p>
  <p>uname3----- {{ uname3 }}</p>
  <hr />
  <TestDemo2>
    <template #header>
      <h1>header---parent</h1>
    </template>
    <template v-slot="slotProps">
      <h1>wode--{{ uname2 }}</h1>
      <h2>{{ slotProps.max }}</h2>
      <p>{{ slotProps.messages }}</p>
    </template>

    <template #footer="{ max }">
      <h5>footer-parent</h5>
      <p>max -count {{ max }}</p>
    </template>
  </TestDemo2>
  <hr />
  <MockTarck v-slot="{ x, y }">
    <p>mouse--x-{{ x }},y -- {{ y }}</p>
  </MockTarck>
</template>
<style scoped></style>
