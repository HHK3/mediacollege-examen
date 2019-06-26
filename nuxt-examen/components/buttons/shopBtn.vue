<template>
    <div class="shopButton">
        <p>Shop here <icon class="cart" icon="shopping-cart" /></p>
    </div>
</template>

<script>

    export default {
        name: "shopBtn"
    }

</script>

<style scoped>

    .shopButton {
        display: inline-block;
        width: 300px;
        padding: 0.7em 1.6em;
        margin: 40px auto;
        border:0.16em solid rgba(255,255,255,0);
        border-radius:2em;
        box-sizing: border-box;
        text-decoration:none;
        font-size: 30px;
        font-family: Norwester;
        font-weight: 500;
        color: #FFFFFF;
        text-shadow: 0 0.09em 0.09em rgba(0,0,0,1);
        text-align:center;
        transition: all 0.2s;
        background: #2d7917;
    }

    .shopButton:hover{
        border-color: #4ad630;
    }

    .cart {
        color: white;
    }

</style>