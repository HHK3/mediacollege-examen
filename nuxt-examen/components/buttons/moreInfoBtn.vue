<template>
    <div class="infoButton">
            <p>More Info <icon class="questiones" icon="question-circle" /></p>
    </div>
</template>

<script>

    export default {
        name: "moreInfoBtdn"
    }

</script>

<style scoped>

    .infoButton {
        display: inline-block;

        margin:0 0.1em 0.1em 0;
        padding:0.3em 1.2em;
        border:0.16em solid rgba(255,255,255,0);
        width: 200px;
        border-radius:2em;
        box-sizing: border-box;
        text-decoration:none;
        font-family: Norwester;
        font-weight:300;
        color: #FFFFFF;
        text-shadow: 0 0.09em 0.09em rgba(0,0,0,1);
        text-align:center;
        transition: all 0.2s;
        background: #296488
    }

    .infoButton:hover{
        border-color: #439edc;
    }

    .questiones {
        color: white;
    }

</style>