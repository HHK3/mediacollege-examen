<template>
    <div class="mx-auto py-30">
        <begin/>
        <popular/>
        <contact/>
    </div>
</template>

<script>
    import begin from '~/components/home/begin.vue'
    import popular from '~/components/home/popular.vue'
    import contact from '~/components/contact/contact.vue'


    export default {
      components: {
            begin,
            popular,
            contact
      },

    head () {
        return {
            title: 'Home - Flash It',
            meta: [
                { hid: 'description', name: 'description', content: 'Welcome to Flash It! The Online Webstore where ' +
                        'you can buy the best Photography products for a low price!' },
                { hid: 'keywords', name: 'keywords', content: 'flash it, flash-it, photography, nuxt, canon, nikon, ' +
                        'sony, camera, flashes, accessoires' }
            ]
        }
    }

    }
</script>

<style>

</style>
