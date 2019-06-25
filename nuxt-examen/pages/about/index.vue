<template>
  <section class="mx-auto py-30">
    <div class="grid">
      <h1 class="fontify">About us</h1>
      <p>
        L Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
      </p>
      <p></p>
    </div>
  </section>
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

    head () {
      return {
        title: 'About - Flash It',
        meta: [
          { hid: 'description', name: 'description', content: 'Learn more about our website and company!'},
          { hid: 'keywords', name: 'keywords', content: 'flash it, flash-it, photography, nuxt, canon, nikon, ' +
                    'sony, camera, flashes, accessoires' }
        ]
      }
    }

  }
</script>

<style>
  p{
    grid-column: 1/ span 6;
  }
</style>
