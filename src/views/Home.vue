<template>
  <Navbar />
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
.modal-backdrop {
  z-index: -1;
}
</style>
