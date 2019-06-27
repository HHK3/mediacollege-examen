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
            title: 'Flash It | Start your Photography Adventure Here | Cheap Prices',
            meta: [
                { hid: 'description', name: 'description', content: 'Welcome to Flash It! | Buy Mirror Reflex Camera Online | ' +
                        'Buy Digital Camera Online | Online Photography Store | Best Cameras for cheap Prices' },
                { hid: 'keywords', name: 'keywords', content: 'Flash It,Photography,Canon,Nikon,' +
                        'Sony,Camera,Flashes,Accessories '}
            ]
        }
    }

    }
</script>

<style>

</style>
