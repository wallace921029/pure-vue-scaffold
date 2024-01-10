<style lang="scss" src="./styles/normal-layout.scss" scoped />

<template>
  <div class="normal-layout">
    <div class="layout-header">
      <SiteLogoWithText />
    </div>
    <div class="layout-content">
      <div class="layout-siderbar">Sidebar Menu</div>
      <div class="layout-body">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SiteLogoWithText from '@/components/SiteLogoWithText/SiteLogoWithText.vue'
</script>
