<template>
    <section>

        <div class="grid">

            <div class="filters">

                <div class="flexFilter">
                    <div class="search">
                        <h3>Search Products</h3>
                        <input type="text" placeholder="Ex. Nikon" v-model="search"  @input="productsFilter()"/>
                    </div>
                    <div class="price">
                        <h3>Max. Price</h3>
                        <div>
                            <p v-text="min"/>
                            <input @input="productsFilter()" type="range" v-model="price" :min="Math.ceil(min)" :max="Math.ceil(max)" class="slider">
                            <p v-text="max"/>
                        </div>
                    </div>
                </div>

                <div v-if="price < max || search.length || category !== 'All' ">
                    <h3 class="filterTitle"> Filtering on:</h3>
                    <div class="activeFilters">
                        <div class="filtert" v-if="price < max">Max price: €{{price}}</div>
                        <div class="filtert" v-if="search.length">Search contains: {{search}}</div>
                    </div>
                </div>

                <div class="flex">
                    <div class="results" v-if="products.length">
                        <span>{{products.length}} results found!</span>
                        <select v-model="order" @input="productsFilter()" style="color: black;">
                            <option value="0">Alphabetical</option>
                            <option value="1">Search</option>
                        </select>
                    </div>

                    <div class="results noResults" v-else>
                        <p style="display: block;margin-left: auto;margin-right: auto;">No results found with those filters</p>
                    </div>
                </div>

            </div>




            <div class="productList">
                <div class="product"  v-for="product in products">
                    <img :src="require ('~/assets/img' + product.image[0].url)" :alt="product.brand + ' ' + product.type " :title="product.name" :class="product.class + ' testert'" >
                    <div class="product_text">
                        <h3>{{product.name}}</h3>
                        <span class="productPrice">{{product.price}}</span>
                        <nuxt-link :to="'/shop/' + product.category + '/' + product.id" :title="'Product Page ' + product.name" class="noDec">
                            <moreBtn />
                        </nuxt-link>

                        <nuxt-link :to="'/shop/' + product.category + '/' + product.id" :title="'Shopping Cart Page ' + product.name" class="noDec">
                            <buyBtn />
                        </nuxt-link>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>

    //Importing the important files
    import * as Fuse from 'fuse.js';
    import camera from '~/json/camera.json';
    import flashes from '~/json/flashes.json';
    import accessoires from '~/json/accessoires.json';
    import moreBtn from '~/components/buttons/moreInfoBtn.vue';
    import buyBtn from '~/components/buttons/buyBtn.vue';


    export default {

        name: "products",

        components: {
            moreBtn,
            buyBtn
        },

        computed: {
            //Creating function with all products in one array
            allProducts() {
                let productsArray = [];

                //Running for loops to push all data through array
                for (let i = 0; i < camera.length; i++) {
                    productsArray.push({...camera[i], 'category': 'camera'})
                }

                for (let i = 0; i < flashes.length; i++) {
                    productsArray.push({...flashes[i], 'category': 'flashes'})
                }

                for (let i = 0; i < accessoires.length; i++) {
                    productsArray.push({...accessoires[i], 'category': 'accessoires'})
                }

                return productsArray;

            }
        },

        data() {
            return {
                order: 0,
                products: [],
                fuse: '',
                min: 4.49,
                max: 3179,
                price: 150,
                search: '',
                category: 'All',
                options : {
                    threshold: 0.5,
                    location: 0,
                    maxPatternLength: 32,
                    minMatchCharLength: 1,
                    keys: [
                        "name",
                    ]
                }
            }
        },

        mounted() {
            this.products = this.allProducts;
            this.max = Math.max.apply(Math, this.products.map(function(o) { return o.price; }))
            this.min = Math.min.apply(Math, this.products.map(function(o) { return o.price; }))
            this.price = Math.ceil(this.max);
            this.fuse = new Fuse(this.products, this.options)
            this.productsFilter();
        },

        methods: {

            async productsFilter(){
                let products = await this.allProducts;
                if (this.search.length) {
                    products = (this.fuse.search(this.search));
                }
                delete products.__ob__;

                switch(this.order.toString()) {

                    //Alphabetical
                    case '0':

                        let arr = [];
                        for (let i = 0; i < products.length; i++){
                            arr.push(products[i].name)
                        }
                        arr.sort();
                        let newProducts = [];

                        for (let i = 0; i < arr.length; i++){
                            let index = products.findIndex(p => p.name == arr[i])
                            newProducts.push(products[index])
                        }

                        products = newProducts;
                        break;

                    //Search
                    case '1':
                        break;
                }

                products = products.filter(b => b.price < this.price);
                this.products = products;
            }
        }
    }

</script>

<style scoped>

    section{
        position: relative;
        background-image: url("~assets/img/bg/background3.jpg");
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        --radius: 5px;
        padding-top: 25px;
        padding-bottom: 25px;
        margin: 25px auto 25px auto;
    }

    .grid {
        width: 65vw;
        display: block;
        margin: 0 auto;
    }

    .grid:after {
        z-index: 9999;
    }

    .results{
        border: 2px solid black;
        width: 100%;
        font-family: Norwester;
        background: #52ef36;
        color: black;
        height: 55px;
        margin: 15px;
        border-radius: 15px;
        grid-column: span 6;
        display: flex;
        align-items: center;
        justify-content: stretch;
    }

    .results > span{
        flex: 1;
    }

    .results > select{
        border-radius: 0 15px 15px 0;
        height: 100%;
    }

    .noResults{
        background: red;
    }

    .testert {
        padding: 15px;
    }

    .filtert {
        font-weight: bolder;
    }

    .productList{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .productPrice{
        width: max-content;
        margin-left: auto;
        font-family: Norwester;
    }

    .product{
        font-size: 18px;
        border-radius: 20px;
        text-align: -webkit-center;
        margin: 15px;
        background: white;
    }

    .product > p, .product > span {
        z-index: 5;
    }

    .productPrice:before{
        content: '€';
    }

    .noDec{
        display: block;
        max-width: 200px;
        margin: 20px auto 20px auto;
    }

    .product_text {
        text-align: left;
        padding-left: 12px;
        font-size: 23px;
    }

    .filterTitle{
        margin-left: 15px;
        color: white;
    }

    .activeFilters{
        padding: 7.5px;
        margin: 0 15px 15px;
        background: white;
        border-radius: 5px;

    }

    .activeFilters > div{
        display: inline-block;
        width: max-content;
        padding: 7.5px;
        border-radius: 5px;
        margin: 1.7px;
        background: lightskyblue;
    }

    .filters{
        grid-column: span 6;
        background: #3b8070;
        border-radius: 30px;
    }

    .search, .price{
        color: white;
        margin: 7.5px;
        min-width: 500px;
        flex: 1;
        max-width: 100%;
    }

    h3{
        font-weight: initial !important;
    }

    .search > input, .price > div{
        padding: 15px;
        color: black;
        font-family: Norwester;
        background: white;
        width: 100%;
        border-radius: 5px;
        font-size: 18px;
    }

    input:focus,select:focus{
        outline: none;
        border-color: dodgerblue;
    }

    .price > div{
        justify-content: stretch;
        align-items: center;
        display: flex;
        max-width: 100%;
    }
    .price > div >p{
        margin-right:15px;
        display: inline-block;
    }

    .price > div >p:before{
        content: '€';
    }

    .price > div >p:last-child{
        margin-right: 0;
        margin-left: 15px;
    }

    .slider {
        border-radius: 5px;
        flex: 1;
        -webkit-appearance: none;
        width: 100%;
        height: 15px;
        background: none;
        outline: none;
        transition: .2s;
        background: lightblue;
    }

    .slider:focus,.slider:hover{
        height: 25px;
    }

    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        transition: .2s ease-in-out;
        appearance: none;
        width: 15px;
        height: 15px;
        border-radius: 100%;
        background: green;
        cursor: pointer;
    }

    .slider:hover::-webkit-slider-thumb, .slider:focus::-webkit-slider-thumb {
        height: 25px;
        width: 7px;
        border-radius: 20%;
    }

    .flexFilter{
        flex-wrap: wrap;
        padding: 7.5px;
        width: 100%;
        display: flex;
        justify-content: stretch;
    }

    @media screen and (max-width: 1650px) {
        .productList {
            grid-template-columns: 1fr 1fr;
        }

        @media screen and (max-width: 1366px) {
            .grid {
                width: 95vw;
            }

            .productList {
                grid-template-columns: 1fr 1fr 1fr;
            }

            @media screen and (max-width: 1000px) {

                .productList {
                    grid-template-columns: 1fr 1fr;
                }


                @media screen and (max-width: 600px) {

                    .productList {
                        grid-template-columns: 1fr;
                    }

                    @media screen and (max-width: 550px) {
                        .noDec {
                            margin: 20px auto 20px auto;
                        }

                        .flexFilter {
                            flex-direction: column;
                        }

                        .search, .type, .price, .allergies {
                            padding-right: 15px;
                            width: 100%;
                            min-width: 0;
                            max-width: 100%;
                        }

                        @media screen and (max-width: 450px) {
                            .product {
                                max-width: 100%;
                            }

                            .tripod {
                                max-width: 150px;
                            }

                            .camera {
                                max-width: 260px;
                            }

                        }

                    }
                }
            }
        }
    }



</style>