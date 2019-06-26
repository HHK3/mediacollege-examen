<template>
    <div class="mx-auto py-30">
        <section class="sectionert">
            <div class="bg-overlay"></div>
            <div class="grid">
                <h1 class="mainText">{{ json[$route.params.id - 1].name }}</h1>
                <h2 class="subText">€{{ json[$route.params.id - 1].price }}</h2>

                <div class="gridjes1">
                    <div class="product" >
                        <div  class="mainPic">
                            <img v-lazy="require ('@/assets/img' + json[$route.params.id - 1].image[0].url)" :alt="json[$route.params.id - 1].brand + ' ' + json[$route.params.id - 1].type" :title="json[$route.params.id - 1].name">
                        </div>

                        <div class="gridjes">
                            <div>
                                <img v-lazy="require ('@/assets/img' + json[$route.params.id - 1].image[1].url)" :alt="json[$route.params.id - 1].brand + ' ' + json[$route.params.id - 1].type + ' - 2'" :title="json[$route.params.id - 1].name + ' - 2'">
                            </div>

                            <div>
                                <img v-lazy="require ('@/assets/img' + json[$route.params.id - 1].image[2].url)" :alt="json[$route.params.id - 1].brand + ' ' + json[$route.params.id - 1].type + ' - 3'" :title="json[$route.params.id - 1].name + ' - 3'">
                            </div>
                        </div>
                    </div>

                    <div class="informationert" >
                        <h3 class="subText">Product info</h3>
                        <br>
                        <h3>Quantity: {{ json[$route.params.id - 1].amount }}</h3>
                        <h3>Max. Flash Range: {{ json[$route.params.id - 1].max_flash_range }}{{ json[$route.params.id - 1].flash_range_unit }}</h3>
                        <h3>Exposure Control: {{ json[$route.params.id - 1].exposure_control }}</h3>
                        <h3>Made for: {{ json[$route.params.id - 1].brand }} cameras</h3>
                        <nuxt-link :to="'/shop/' + json[$route.params.id - 1].category + '/' + json[$route.params.id - 1].id" :title="'Shopping Cart Page ' + json[$route.params.id - 1].name" class="noDec">
                            <buyBtn />
                        </nuxt-link>
                    </div>
                </div>


            </div>
        </section>
        <contact/>
    </div>

</template>

<script>
    import flashes from '~/json/flashes.json'
    import buyBtn from '~/components/buttons/buyBtn.vue';
    import contact from '~/components/contact/contact.vue'

    export default {

        components: {
            contact,
            buyBtn
        },

        validate (data) {
            return /^\d+$/.test(data.params.id)
        },

        data(){
            return{
                json: flashes
            }
        },

        head() {
            return {
                // title: something
                title: this.json[this.$route.params.id - 1].name + '- Flash It',
                meta: [
                    { hid: 'description', name: 'description', content: 'The Product page of ' + this.json[this.$route.params.id - 1].name  },
                    { hid: 'keywords', name: 'keywords', content: 'flash it, flash-it, photography, nuxt, '
                            +  this.json[this.$route.params.id - 1].keywords + ''}
                ],


            }
        }

    }
</script>



<style scoped>

    .bg-overlay, .sectionert {
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

    .mainText {
        font-size: 50px;
    }

    .subText, .productInfoText {
        font-size: 25px;
    }

    .sectionert{
        position: relative;
        background-image: url("~assets/img/bg/background3.jpg");
        background-attachment: fixed;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .grid{
        position: relative;
        width: 60vw;
        margin: 0 auto 25px auto;
    }

    .gridjes1 {
        display: grid;
        margin: auto;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 25px;
        padding: 15px 0;
    }

    .gridjes {
        margin: auto;
        grid-gap: 10px;
    }

    .gridjes > div > img {
        padding: 10px;
        max-height: 200px;
        margin: auto;
    }

    .mainPic {
        margin: auto;
        grid-column: 1/3;
        width: 83%;
        max-width: 250px;
    }

    .product{
        font-size: 18px;
        border-radius: 20px;
        padding: 20px;
        grid-column: 1/3;
        text-align: center;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        background: white;
        grid-gap: 20px;
    }

    .informationert {
        font-size: 18px;
        border-radius: 20px;
        padding: 20px;
        text-align: right;
        background: white;
    }

    @media screen and (max-width: 1366px) {
        .grid {
            width: 85vw;
            margin-left: auto;
            margin-right: auto;
        }

        @media screen and (max-width: 1000px) {

            .gridjes1 {
                display: grid;
                grid-template-columns: 1fr;
                grid-gap: 25px;
                padding: 15px 0;
            }

            .product {
                grid-column: unset;
            }

            .informationert {
                font-size: 20px;
                text-align: center;
            }

            .productInfoText {
                font-size: 30px;
            }


            @media screen and (max-width: 650px) {

                .mainText {
                    font-size: 38px;
                }

                .gridjes1 {
                    display: grid;
                    margin: auto;
                    grid-template-columns: 1fr;
                    grid-gap: 25px;
                    padding: 15px 0;
                }

                .gridjes {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-column: 1/5;
                    margin: auto;
                    grid-gap: 25px;
                }

                .mainPic {
                    margin: auto;
                    grid-column: 1/5;
                }

                .mainPic > img {
                    width: 100%;
                    max-width: 300px;
                }

                .product{
                    grid-template-columns: 1fr 1fr 1fr 1fr;
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

</style>