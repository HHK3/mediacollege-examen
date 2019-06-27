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
                title: 'Shop here the best Cameras | Flash It | Cheap Prices',
                meta: [
                    { hid: 'description', name: 'description', content: 'Shop here for the best Cameras| Buy Mirror Reflex Camera Online | ' +
                            'Buy Digital Camera Online | Online Photography Store | Welcome to Flash It! ' },
                    { hid: 'keywords', name: 'keywords', content: 'Flash It,Photography,Canon,Nikon,' +
                            'Sony,Camera,Flashes,Accessories,Shop' }
                ]
            }
        }
    }

</script>

<style scoped>

</style>