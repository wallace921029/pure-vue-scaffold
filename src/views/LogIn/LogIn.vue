<style lang="scss" src="./styles/log-in.scss" scoped />

<template>
  <div class="log-in">
    <h1>Log In</h1>
    <button @click="handleSubmit">Submit</button>
  </div>
</template>

<script lang="ts" setup>
import {useRouter} from 'vue-router'

const router = useRouter()

const handleSubmit = () => {
  router.replace({
    path: '/home'
  })
}
</script>
