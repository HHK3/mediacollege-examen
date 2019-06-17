<template>
    <div>
        {{ json[$route.params.id - 1] }}
    </div>
</template>

<script>
    import camera from '~/json/camera.json'

    export default {
        validate (data) {
            return /^\d+$/.test(data.params.id)
        },

        data(data){

            return{
                json: camera
            }
        },
    }


</script>

<style scoped>

</style>