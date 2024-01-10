<style lang="scss" src="./styles/site-logo-with-text.scss" scoped />

<template>
  <div className="site-logo-with-text">
    <img
      :src="logoImg"
      :alt="`${props.title} Logo`"
    />
    <span>{{ props.title }}</span>
  </div>
</template>

<script lang="ts" setup>
import logoImg from '@/assets/images/vue.svg'
import projectPackageJson from '../../../package.json'

interface IProps {
  title?: string
}

const props = withDefaults(defineProps<IProps>(), {
  title: projectPackageJson.name
})

console.log(projectPackageJson.name)
</script>
