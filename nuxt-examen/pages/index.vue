<template>
    <div class="mx-auto py-32">
        <h1 class="font-heading uppercase mb-8">Popular Cameras</h1>
        <div class="item-container">
            <div v-for="camera in json" :key="camera.id" class="item">
                <nuxt-link :to="'/shop/camera/' + camera.id">
                    <img v-lazy="require ('@/assets/img' + camera.image[0].url)" alt="cover" :class="camera.class">
                </nuxt-link>
                <div class="text-black font-semibold text-lg overflow-hidden whitespace-no-wrap overflow-dots pb-1">{{camera.name}}</div>
                <nuxt-link :to="'/item/camera/' + camera.id"> Test </nuxt-link>
            </div>

            <div v-for="flash in flashes" :key="flash.id" class="item">
                <nuxt-link :to="'/shop/flashes/' + flash.id">
                    <img v-lazy="require ('@/assets/img' + flash.image[0].url)" alt="cover" :class="flash.class">
                </nuxt-link>
                <div class="text-black font-semibold text-lg overflow-hidden whitespace-no-wrap overflow-dots pb-1">{{flash.name}}</div>
                <nuxt-link :to="'/item/flashes/' + flash.id"> Test </nuxt-link>
            </div>

            <div v-for="accessoires in accessoiress" :key="accessoires.id" class="item">
                <nuxt-link :to="'/shop/accessoires/' + accessoires.id">
                    <img v-lazy="require ('@/assets/img' + accessoires.image[0].url)" alt="cover" :class="accessoires.class">
                </nuxt-link>
                <div class="text-black font-semibold text-lg overflow-hidden whitespace-no-wrap overflow-dots pb-1">{{accessoires.name}}</div>
                <nuxt-link :to="'/item/accessoires/' + accessoires.id"> Test </nuxt-link>
            </div>

        </div>
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import camera from '~/json/camera.json'
import flashes from '~/json/flashes.json'
import accessoires from '~/json/accessoires.json'

export default {
  components: {
    Logo
  },

  data(){
    return{
      json: camera,
      flashes: flashes,
      accessoiress: accessoires
    }
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
