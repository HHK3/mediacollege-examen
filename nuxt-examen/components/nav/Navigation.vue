<template>
    <header>

        <!-- Mobile Menu Toggle Button -->
        <div class="menu-btn">
            <div class="btn-line"></div>
            <div class="btn-line"></div>
            <div class="btn-line"></div>
        </div>

        <nav class="nav">

            <!-- NAV Logo Flash It-->
            <div class="nav__logo">
                <nuxt-link to="/" class="">
                    <img src="@/assets/img/logo/logo2.png" width="170px">
                </nuxt-link>
            </div>

            <!--NAV for Desktop -->
            <div id="mainListDiv" class="main_list nav__wrapper">
                <ul class="navlinks nav__wrapper__list">
                    <li class="nav__wrapper__list__item">
                        <nuxt-link to="/" class="text-white no-underline hover:text-grey-light ml-16">Home</nuxt-link>
                    </li>
                    <li class="nav__wrapper__list__item">
                        <nuxt-link to="/shop" class="text-white no-underline hover:text-grey-light ml-16">Shop</nuxt-link>
                    </li>
                    <li class="nav__wrapper__list__item">
                        <nuxt-link to="/about" class="text-white no-underline hover:text-grey-light ml-16">About</nuxt-link>
                    </li>
                    <li class="nav__wrapper__list__item">
                        <nuxt-link to="/faq" class="text-white no-underline hover:text-grey-light ml-16">FAQ</nuxt-link>
                    </li>
                </ul>
            </div>

            <!--NAV for Mobile -->
            <div class="menu">
                <ul class="menu-nav">

                    <!--Home Link -->
                    <li class="nav-item">
                        <nuxt-link
                            to="/"
                            class="nav-link text-white no-underline hover:text-grey-light ml-16"
                            title="Home Page">
                                Home
                        </nuxt-link>
                    </li>

                    <!--Shop Link -->
                    <li class="nav-item">
                        <nuxt-link
                            to="/shop"
                            class="nav-link text-white no-underline hover:text-grey-light ml-16"
                            title="Shop Page">
                                Shop
                        </nuxt-link>
                    </li>

                    <!--About Link -->
                    <li class="nav-item">
                        <nuxt-link
                            to="/about"
                            class="nav-link text-white no-underline hover:text-grey-light ml-16"
                            title="About Page">
                                About
                        </nuxt-link>

                    </li>

                    <!--FAQ Link -->
                    <li class="nav-item">
                        <nuxt-link
                            to="/faq"
                            class="nav-link text-white no-underline hover:text-grey-light ml-16"
                            title="FAQ Page">
                                FAQ
                        </nuxt-link>
                    </li>

                </ul>

            </div>

        </nav>

    </header>
</template>



<script>
    export default {
        name: "Navigation",

        head () {
            return {
                script: [
                    { src: 'navbar.js' },
                    { src: 'navbar2.js' , body: true}
                ],
            }
        },
    }


</script>

<style scoped>

    header {
        position: fixed;
        z-index: 3;
        width: 100%;
    }

    .nav {
        width: 100%;
        height: 106px;
        background: black;
        position: fixed;
        line-height: 65px;
        text-align: center;
        padding-top: 20px;
        padding-bottom: 20px;
        -webkit-transition: all 0.8s ease-in-out;
        transition: all 0.8s ease-in-out;
    }

    .nav__logo {
        float: left;
        width: auto;
        height: auto;
        padding-left: 3rem;
    }

    .nav__logo a {
        text-decoration: none;
        color: #fff;
        font-size: 2rem;
    }

    .nav__logo a:hover {
        color: #00E676;
    }

    .nav__wrapper {
        height: 65px;
        float: right;
        padding: 0;
        margin: 0;
    }

    .nav__wrapper__list {
        width: 100%;
        height: 65px;
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .nav__wrapper__list__item {
        width: auto;
        height: 65px;
        padding: 0;
        padding-right: 3rem;
    }

    .nav__wrapper__list__item a {
        text-decoration: none;
        color: #fff;
        line-height: 65px;
        font-size: 1.8rem;
    }

    .nav__wrapper__list__item a:hover {
        color: #00F676;
    }

    .menu  {
        display: none;
    }

    .menu-btn {
        display: none;
    }


    @media screen and (max-width: 1120px) {

        .menu  {
            display: block;
        }

        #mainListDiv {
            display: none;
        }

        .menu.show {
            visibility: visible;
        }

        .menu-btn {
            position: absolute;
            display: block;
            right: 35px;
            top: 43px;
            cursor: pointer;
            transition: all 1s ease-out;
            z-index: 1002;
        }

        .menu-btn .btn-line {
            width: 28px;
            height: 3px;
            margin: 0 0 5px 0;
            background: #ffffff;
            transition: all 1s ease-out;
        }

        .menu-btn.close {
            transform: rotate(180deg);
        }

        .menu-btn.close .btn-line:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }

        .menu-btn.close .btn-line:nth-child(2) {
            opacity: 0;
        }

        .menu-btn.close .btn-line:nth-child(3) {
            transform: rotate(-45deg) translate(8px, -5px);
        }

        .menu {
            position: fixed;
            top: 0;
            width: 100%;
            margin-top: 106px;
            visibility: hidden;
        }

        .menu-nav {
            display: flex;
            flex-flow: column wrap;
            align-items: center;
            justify-content: center;
            float: left;
            width: 50%;
            height: 94vh;
            overflow: hidden;
        }

        .menu-nav {
            margin: 0;
            padding: 0;
            background: rgba(55, 55, 55, 0.9);
            list-style: none;
            transform: translate3d(0, -100%, 0);
            transition: all 1s ease-out;
        }

        .menu-nav.show {
            transform: translate3d(0, 0, 0);
        }

        .menu .nav-item {
            transform: translate3d(600px, 0, 0);
            transition: all 1s ease-out;
        }

        .menu .nav-item.show {
            transform: translate3d(0, 0, 0);
        }

        .menu .nav-item.current > a {
            color: #eece1a;
            pointer-events: none;
            cursor: default;
        }

        .menu .nav-link {
            display: inline-block;
            position: relative;
            font-size: 80px;
            text-transform: uppercase;
            padding: 2.5rem 0;
            font-weight: 300;
            color: #fff;
            text-decoration: none;
            transition: all 1s ease-out;
        }

        .menu .nav-link:hover {
            color: #eece1a;
        }


        ul.menu-nav{
            float: none;
            width: 100%;
            min-height: 0;
        }

        ul.menu-nav.show {
            transform: translate3d(0, 0, 0);
        }

        .menu-nav {
            transform: translate3d(-100%, 0, 0);
            font-size: 24px;
        }

        .nav-item:nth-child(1) {
            transition-delay: 0.1s;
        }

        .nav-item:nth-child(2) {
            transition-delay: 0.2s;
        }

        .nav-item:nth-child(3) {
            transition-delay: 0.3s;
        }

        .nav-item:nth-child(4) {
            transition-delay: 0.4s;
        }

        @media screen and (max-width: 762px) {

            .menu .nav-link {
                font-size: 50px;
                padding: 1.5rem 0;
            }

            @media screen and (max-width: 480px) {
                .nav__logo a {
                    font-size: 1.6rem;
                }

                .menu .nav-link {
                    font-size: 35px;
                    padding: 1rem 0;
                }

                @media screen and (max-width: 350px) {
                    .menu .nav-link {
                        font-size: 30px;
                    }

                    .menu-nav {
                        height: 107vh;
                    }

                }

            }

        }

    }


</style>