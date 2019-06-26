<template>
    <section>
        <div class="bg-overlay"></div>
        <div class="grid">
            <h1 class="mainText">How it all began...</h1>

            <h2 class="subText">
                Flash It was founded in 2017 by "Adventure" Photographer Tyrone P. Since he was 10 years old,<br>
                he started to photograph Nature, Animals and more. Because he wanted to let the whole World know<br>
                the magic of Photographing, he founded Flash It!<br><br>
                Flash It started to grew big in 2018 in the Netherlands and in late 2018, the company grew out to<br>
                the rest of Europe (Belgium, Germany, France etc.). Now, it's one of the biggest Stores of Europe<br>
                in the Photography World!
            </h2>

        </div>
    </section>
</template>

<script>

    export default{
        name: "middle",
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


    .grid{
        margin: 25px auto 25px auto;
        position: relative;
        width: 80vw;
    }

    .grid:after {
        z-index: 9999;
    }

    .mainText {
        font-size: 50px;
    }

    .subText {
        margin-top: 50px;
        font-size: 17px;
        padding-bottom: 20px;

    }

    @media screen and (max-width: 1650px) {

        @media screen and (max-width: 1366px) {
            .grid {
                width: 95vw;
                margin-left: auto;
                margin-right: auto;
            }

            @media screen and (max-width: 1000px) {

                @media screen and (max-width: 650px) {

                    .mainText {
                        font-size: 38px;
                    }

                    @media screen and (max-width: 550px) {

                        @media screen and (max-width: 450px) {


                            .mainText {
                                font-size: 30px;
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