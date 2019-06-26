<template>
    <div class="buyButton">
        <p>Buy Now <icon class="cart" icon="shopping-cart" /></p>
    </div>
</template>

<script>

    export default {
        name: "buyBtn"
    }

</script>

<style scoped>

    .buyButton {
        display: inline-block;
        width: 200px;
        padding:0.3em 1.2em;
        margin:0 0.1em 0.1em 0;
        border:0.16em solid rgba(255,255,255,0);
        border-radius:2em;
        box-sizing: border-box;
        text-decoration:none;
        font-family: Norwester;
        font-weight: 500;
        color: #FFFFFF;
        text-shadow: 0 0.09em 0.09em rgba(0,0,0,1);
        text-align:center;
        transition: all 0.2s;
        background: #2d7917;
    }

    .buyButton:hover{
        border-color: #4ad630;
    }

    .cart {
        color: white;
    }

</style>