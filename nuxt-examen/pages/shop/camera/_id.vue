<template>
    <div class="container mx-auto py-30">
        <img :src="require ('@/assets/img' + json[$route.params.id - 1].image[0].url)" alt="cover" width="300px">
        {{ json[$route.params.id - 1].id }}
        <br>
        {{ json[$route.params.id - 1].name }}
    </div>
</template>

<script>
    import camera from '~/json/camera.json'

    export default {
        validate (data) {
            return /^\d+$/.test(data.params.id)
        },

        data(){
            return{
                json: camera
            }
        },

        head() {
            return {
                // title: something
                title: this.json[this.$route.params.id - 1].name + '- Flash It',
                meta: [
                    { hid: 'description', name: 'description', content: 'Shopping page with a lot of Photography items! ' },
                    { hid: 'keywords', name: 'keywords', content: 'flash it, flash-it, photography, nuxt, '
                            +  this.json[this.$route.params.id - 1].keywords + ''}
                ]
            }
        }

    }


</script>

<style scoped>

</style>