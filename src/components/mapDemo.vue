<!-- src/components/TheHeader.vue -->
<script>
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useCounterStore } from '../stores/counter'
export default {
  components: {},
  computed: {
    ...mapState(useCounterStore, ['name']),
    ...mapState(useCounterStore, { user: 'name' }),
    ...mapState(useCounterStore, { newUser: (state) => state.name + '❤️' }),
    ...mapWritableState(useCounterStore, { userWrite: 'name' }),
    ...mapState(useCounterStore, ['doubleCount'])
    // ...mapState(useUserStore, { user: "username" }),
    // ...mapState(useUserStore, { user: (state) => `${state.username}` }),
    // 通过 mapState 获取到的状态在组件中都是只读的不能修改
    // 通过 mapWritableState 获取到的状态在组件中是可以修改的
    // ...mapWritableState(useUserStore, { user: 'username' })
  },
  methods: {
    ...mapActions(useCounterStore, ['increment'])
  }
}
</script>

<template>
  <div>
    <h1>name ----- {{ name }}</h1>
    <h1>user ----- {{ user }}</h1>
    <h1>newUser ----- {{ newUser }}</h1>
    <h2>{{ doubleCount }}</h2>
    <input type="text" v-model="userWrite" />
    <input type="text" v-model="user" />
    <button @click="increment">increment ++</button>
  </div>
</template>
