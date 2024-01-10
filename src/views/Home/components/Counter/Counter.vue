<style lang="scss" src="./styles/counter.scss" scoped />

<template>
  <div class="counter">
    <h2>Here is a counter demo by Pinia</h2>

    <div class="counter-box">
      <button
        class="counter-button"
        @click="hanldeSubtractOne"
      >
        -
      </button>
      <span class="counter-value">{{ countValue }}</span>
      <button
        class="counter-button"
        @click="handleAddOne"
      >
        +
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed} from 'vue'
import useCounterStore from '@/store/modules/use-counter-store'

const counterStore = useCounterStore()

const countValue = computed(() => counterStore.value)

const hanldeSubtractOne = () => {
  counterStore.decrement()
}

const handleAddOne = () => {
  counterStore.increment()
}
</script>
@/store/modules/use-counter-store
