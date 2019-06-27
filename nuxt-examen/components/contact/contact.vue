<template>
    <section>
        <div class="bg-overlay"></div>
        <div class="grid">
            <h1 class="font-heading uppercase mb-8 mainText">Contact Us</h1>
            <div class="contact_grid">
                <div>
                    <h3>
                        <icon class="phone" icon="phone" /> Call us!
                        <br> +316 12345 678
                    </h3>
                </div>

                <div>
                    <h3>
                        <icon class="envelope" icon="envelope" /> E-mail Us! <br>
                        <a class="mail" href="mailto:service@flashit.com">
                            service@fla<span class="lmao">shit</span>.com
                        </a>
                    </h3>
                </div>

                <div>
                    <h3>
                        <icon class="store" icon="store-alt" /> Visit our Store! <br>
                        Picassostreet 37, Zaandam</h3>
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
    .bg-overlay, section {
        background: #f2eddc;
    }

    .bg-overlay{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.75;
    }

    .grid{
        margin: 25px auto 25px auto;
        position: relative;
        width: 80vw;
    }

    .grid:after {
        z-index: 9999;
    }

    .mainText {
        color: black;
        text-align: center;
        font-size: 50px;
        /*padding: 30px 30px 0 30px;*/
    }

    .contact_grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        text-align: center;
        font-size: 40px;
        color: black;
    }

    .phone {
        color: green;
    }

    .envelope {
        color: blue;
    }

    .store {
        color: red;
    }

    .mail {
        text-decoration: underline;
        cursor: pointer;

    }

    /*.mail > .lmao {*/
    /*    transition: ease-out 0.3s;*/
    /*}*/

    /*.mail:hover > .lmao {*/
    /*    color: red;*/
    /*}*/

    section{
        position: relative;
        color: white;
        padding: 20px;
        background-color: beige;
        background-image: url("~assets/img/bg/background2.jpg");
        background-attachment: fixed;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
    }

    section:after{
        bottom: unset;
        top: -3vw;
    }

    @media screen and (max-width: 1730px) {
        .contact_grid {
            font-size: 30px;
        }

        @media screen and (max-width: 1300px) {

            .contact_grid {
                grid-template-columns: 1fr 1fr 1fr;
                font-size: 25px;
            }

            @media screen and (max-width: 1120px) {

                .grid {
                    width: 90vw;
                }

                .contact_grid {
                    grid-template-columns: 1fr 1fr 1fr;
                    font-size: 26px;
                }

                @media screen and (max-width: 1000px) {

                    .grid {
                        width: 93vw;
                    }

                    @media screen and (max-width: 768px) {

                        .contact_grid {
                            grid-template-columns: 1fr;
                            font-size: 26px;
                            grid-gap: 25px;
                        }

                        .grid {
                            width: 70vw;
                        }

                        @media screen and (max-width: 450px) {

                            .mainText {
                                font-size: 30px;
                            }

                            .contact_grid {
                                grid-template-columns: 1fr;
                                font-size: 19px;
                                grid-gap: 25px;
                            }

                            @media screen and (max-width: 365px) {
                                .mainText {
                                    font-size: 30px;
                                }

                            }

                        }

                    }

                }

            }

        }
    }


</style>