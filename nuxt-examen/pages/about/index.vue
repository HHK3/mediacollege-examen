<template>
    <div class="mx-auto py-30">
        <headert/>
        <middle/>
        <contact/>
    </div>
</template>

<script>
  import headert from '~/components/about/headert.vue'
  import middle from '~/components/about/middle.vue'
  import contact from '~/components/contact/contact.vue'

  export default {
    components: {
      headert,
      middle,
      contact
    },

    head () {
      return {
        title: 'About - Flash It',
        meta: [
          { hid: 'description', name: 'description', content: 'Learn more about our website and company!'},
          { hid: 'keywords', name: 'keywords', content: 'flash it, flash-it, photography, nuxt, canon, nikon, ' +
                    'sony, camera, flashes, accessoires, about, contact' }
        ]
      }
    }

  }
</script>

<style>

</style>
