<template>
  <header>
    <div class="logo">
      <router-link :to="{ name: 'main' }"><img src="../assets/ProfileIcon.svg" /></router-link>
    </div>
    <div class="profile">
      <router-link :to="{ name: 'profile' }"><img src="../assets/ProfileIcon.svg" /></router-link>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeaderComponent'
})
</script>

<style scoped></style>
