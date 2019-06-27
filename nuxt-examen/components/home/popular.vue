<template>
    <section>
        <div class="bg-overlay"></div>
        <div class="grid">
            <h1 class="font-heading uppercase mb-8 mainText">Our Popular Products</h1>
            <div class="productList">
                <div class="product"  v-for="product in products">
                    <img :src="require ('~/assets/img' + product.image[0].url)" :alt="product.brand + ' ' + product.type + ', available at Flash It!'" :title="'The High Quality ' + product.name + ' | Flash It'" :class="product.class + ' testert'" >
                    <div class="product_text">

                        <h3>{{product.name}}</h3>
                        <span class="productPrice">{{product.price}}</span>
                        <br>
                        <nuxt-link :to="'/shop/' + product.category + '/' + product.id" :title="'Click here for more info about ' + product.name + ' | Flash It'" class="noDec">
                            <moreBtn />
                        </nuxt-link>

                        <nuxt-link :to="'/shop/' + product.category + '/' + product.id" :title="'Click here to buy product ' + product.name + '| Flash It'" class="noDec">
                            <buyBtn />
                        </nuxt-link>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

    import camera from '~/json/camera.json'
    import flashes from '~/json/flashes.json'
    import accessoires from '~/json/accessoires.json'
    import moreBtn from '~/components/buttons/moreInfoBtn.vue';
    import buyBtn from '~/components/buttons/buyBtn.vue';

    export default{

        name: "popular",

        components: {
            moreBtn,
            buyBtn
        },

        computed: {
            popularProducts() {
                let popularArray = [];

                for (let i = 0; i < 2; i++) {
                    popularArray.push({...camera[i], 'category': 'camera'})
                }

                for (let i = 0; i < 1; i++) {
                    popularArray.push({...flashes[i], 'category': 'flashes'})
                }

                for (let i = 0; i < 1; i++) {
                    popularArray.push({...accessoires[i], 'category': 'accessoires'})
                }

                return popularArray;
            }
        },

        mounted() {
            this.products = this.popularProducts;
        },

        data(){
            return{
                products: []
            }
        },



    }
</script>

<style scoped>

    .bg-overlay, section {
        background: #c885c8;
    }

    .bg-overlay{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.5;
    }

    section{
        position: relative;
        background-image: url("~assets/img/bg/background3.jpg");
        background-attachment: fixed;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .mainText {
        text-align: center;
        font-size: 50px;
        padding: 30px 30px 0 30px;
    }

    .grid{
        margin: 25px auto 25px auto;
        position: relative;
        width: 80vw;
    }

    .grid:after {
        z-index: 9999;
    }

    .productList {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding-bottom: 30px;
    }

    .product{
        font-size: 18px;
        border-radius: 20px;
        text-align: -webkit-center;
        margin: 15px;
        background: white;
    }

    .testert {
        padding: 15px;
    }

    .product > p, .product > span {
        z-index: 5;
    }

    .productPrice:before{
        content: '€';
    }

    .productPrice{
        font-family: Norwester;
    }

    .product_text {
        font-size: 23px;
    }

    .noDec{
        display: block;
        max-width: 200px;
        margin: 20px auto 20px auto;
    }

    @media screen and (max-width: 1650px) {
        .productList {
            grid-template-columns: 1fr 1fr;
        }

        @media screen and (max-width: 1366px) {
            .grid {
                width: 95vw;
                margin-left: auto;
                margin-right: auto;
            }

            @media screen and (max-width: 1000px) {

                .productList {
                    grid-template-columns: 1fr 1fr;
                }


                @media screen and (max-width: 650px) {

                    .productList {
                        grid-template-columns: 1fr;
                    }

                    .mainText {
                        font-size: 38px;
                    }

                    @media screen and (max-width: 550px) {
                        .noDec {
                            margin: 20px auto 20px auto;
                        }

                        @media screen and (max-width: 450px) {
                            .product {
                                max-width: 100%;
                            }

                            .mainText {
                                font-size: 30px;
                            }

                            .tripod {
                                max-width: 150px;
                            }

                            .camera {
                                max-width: 260px;
                            }

                            @media screen and (max-width: 365px) {
                                .mainText {
                                    font-size: 25px;
                                }

                            }

                        }

                    }

                }

            }

        }

    }


</style>