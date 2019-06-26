<template>
    <div class="mx-auto py-30">
        <headert />
        <products />
        <contact />
    </div>
</template>

<script>

    // Importing Page Sections
    import headert from '~/components/products/headert.vue'
    import products from '~/components/products/products.vue'
    import contact from '~/components/contact/contact.vue'



    export default {
        components: {
            products,
            headert,
            contact
        },

        head () {
            return {
                title: 'Shop - Flash It',
                meta: [
                    { hid: 'description', name: 'description', content: 'Shopping page with a lot of Photography items! ' },
                    { hid: 'keywords', name: 'keywords', content: 'flash it, flash-it, photography, nuxt, canon, nikon, ' +
                            'sony, camera, flashes, accessoires' }
                ]
            }
        }
    }

</script>

<style scoped>

</style>