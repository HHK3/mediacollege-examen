<template>
  <div>
    <navigation></navigation>
    <nuxt />
  </div>
</template>

<script>
  import Navigation from '@/components/nav/Navigation'

  export default {
    components: {
      Navigation
    }
  }
</script>
