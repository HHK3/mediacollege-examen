<template>
    <div class="container mx-auto">
        <h1>{{ json[$route.params.id - 1].name }}</h1>
        <img :src="require ('@/assets/img' + json[$route.params.id - 1].image[0].url)" alt="cover" width="300px">
        {{ json[$route.params.id - 1].id }}
        <br>

    </div>
</template>

<script>
    import camera from '~/json/accessoires.json'

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
                title: this.json[this.$route.params.id - 1].name + ' | Flash It'
            }
        }

    }


</script>

<style scoped>

</style>