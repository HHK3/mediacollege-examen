<template>
    <section>
        <div class="bg-overlay" />

        <div class="grid">
            <img :src="require ('~/assets/img/logo/logo.png')" alt="Flash It Logo" title="Flash It" class="logo" >
            <h1 class="mainText">The best place to start your Photography Adventure</h1>

            <h2 class="subText">
                On a Safari Trip in South Africa? Looking out for birds in the woods or wanna
                start a Vlog?<br>
                Flash It has got you covered with the new Cameras, Flashes and Accessories!<br><br>
                <span class="check">✓</span> High Quality Product for low prices<br>
                <span class="check">✓</span> 24/7 Service <br>
                <span class="check">✓</span> Delivered within 2 workdays<br>
            </h2>

            <nuxt-link to="/shop" title="Shop Page Button" class="noDec">
                <shopBtn class="shopBtn"/>
            </nuxt-link>

        </div>

    </section>
</template>

<script>

    import shopBtn from '~/components/buttons/shopBtn.vue';

    export default {

        name: "begin",

        components: {
            shopBtn
        },

    }

</script>

<style scoped>

    .bg-overlay, section {
        background: #c8a777;
    }

    .bg-overlay{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.7;
    }

    .mainText {
        font-size: 50px;
    }

    .subText {
        margin-top: 50px;
        font-size: 20px;
    }

    .logo {
        width: 100%;
        max-width: 400px;
    }

    section{
        position: relative;
        background-image: url("~assets/img/bg/background1.jpg");
        background-attachment: fixed;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        height: 84vh;
    }

    .grid{
        position: relative;
        width: 80vw;
        margin-left: auto;
        margin-right: auto;
    }

    .check {
        font-weight: bolder;
    }

    @media screen and (max-width: 650px) {
        .mainText {
            text-align: center;
            font-size: 30px;
        }

        .logo {
            margin: 0 auto;
        }

        .shopBtn {
            display: block!important;
            max-width: 230px;
            margin: 20px auto 20px auto!important;
            padding:0.3em 1.2em;
            font-size: 25px;
        }

        @media screen and (max-width: 450px) {
            .mainText {
                text-align: center;
                font-size: 23px;
            }

            .subText {
                font-size: 15px;
            }

            @media screen and (max-width: 359px) {
                .mainText {
                    text-align: center;
                    font-size: 18px;
                }

                .subText {
                    font-size: 14px;
                }

                section{
                    height: 100vh;
                }
            }

        }

    }

</style>