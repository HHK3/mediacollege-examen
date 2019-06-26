<template>
    <section>
        <div class="bg-overlay" />

        <div class="grid">
            <h1 class="mainText">About</h1>

        </div>

    </section>
</template>

<script>

    export default {

        name: "headert",

    }

</script>

<style scoped>

    .bg-overlay, section {
        background: #75afc8;
    }

    section{
        position: relative;
        background-image: url("~assets/img/bg/background4.jpg");
        background-attachment: fixed;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        height: 25vh;
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
        font-size: 90px;
        text-align: center;
        margin: auto;
    }

    .grid{
        position: relative;
        width: 80vw;
        line-height: 25vh;
        margin-left: auto;
        margin-right: auto;
    }


</style>