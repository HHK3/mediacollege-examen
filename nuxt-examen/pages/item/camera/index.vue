<template>
    <div class="container mx-auto py-16">
        <h1 class="font-heading uppercase mb-8">Popular Cameras</h1>
        <div class="item-container flex flex-wrap -mx-4">
            <nuxt-link :to="'/item/camera/' + camera.id" v-for="camera in json" :key="camera.id" class="w-full md:w-1/3 px-4 mb-12 no-underline">
                <img :src="require ('@/assets/img' + camera.image[0].url)" alt="cover" width="300px">
                <div class="text-black font-semibold text-lg overflow-hidden whitespace-no-wrap overflow-dots pb-1">{{camera.name}}</div>
                <br>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import camera from '~/json/camera.json'

export default {
  components: {
    Logo
  },

  data(){
    return{
      json: camera,
    }
  },

}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
/*.container {*/
/*  margin: 0 auto;*/
/*  min-height: 100vh;*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*  text-align: center;*/
/*}*/

/*.title {*/
/*  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,*/
/*    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;*/
/*  display: block;*/
/*  font-weight: 300;*/
/*  font-size: 100px;*/
/*  color: #35495e;*/
/*  letter-spacing: 1px;*/
/*}*/

/*.subtitle {*/
/*  font-weight: 300;*/
/*  font-size: 42px;*/
/*  color: #526488;*/
/*  word-spacing: 5px;*/
/*  padding-bottom: 15px;*/
/*}*/

/*.links {*/
/*  padding-top: 15px;*/
/*}*/
</style>
