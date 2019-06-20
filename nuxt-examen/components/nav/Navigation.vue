<template>
    <div class="navigator font-semibold">
        <div class="container mx-auto flex justify-between items-center py-6">

            <nuxt-link to="/" class="">
                <img src="@/assets/img/logo/logo.png" width="170px">
            </nuxt-link>

            <div class="flex">
                <nuxt-link to="/about" class="text-white no-underline hover:text-grey-light ml-16">About</nuxt-link>
                <nuxt-link to="/catalog" class="text-white no-underline hover:text-grey-light ml-16">Catalog</nuxt-link>
                <nuxt-link to="/about" class="text-white no-underline hover:text-grey-light ml-16">Deals</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>

<style scoped>
    .navigator {
        background: rgba(247, 74, 27, 0.7);
    }
</style>