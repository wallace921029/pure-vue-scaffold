import {defineStore} from 'pinia'
import {ref} from 'vue'

const useCounterStore = defineStore('counter', () => {
  const value = ref(0)

  const increment = () => {
    value.value++
  }

  const decrement = () => {
    value.value--
  }

  return {
    value,
    increment,
    decrement
  }
})

export default useCounterStore
