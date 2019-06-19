<template>
    <div class="bg-blue-900 font-semibold">
        <div class="container mx-auto flex justify-between items-center py-6">
            <nuxt-link to="/" class="text-white no-underline hover:text-grey-light">Home</nuxt-link>
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

</style>