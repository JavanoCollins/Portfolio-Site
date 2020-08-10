<template>
    <div id="app">
        <div class="container">
            <app-nav></app-nav>
        </div>
        <transition
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut"
        >
            <router-view></router-view>
        </transition>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
export default {
    components: {
        appNav: Nav,
        appFooter: Footer
    }
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
}

.animate__fadeOut {
    animation-duration: 0.3s;
}
.animate__fadeIn {
    animation-duration: 1.5s;
}

.container {
    max-width: 1280px;
    overflow: hidden;
    margin: 0 150px;
}

li,
a {
    text-decoration: none;
    list-style: none;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s ease-out;
}

.slide-enter {
    /* transform:  translateY(20px); */
}

.slide-enter-active {
    animation: slide-in 0.5s ease-out forwards;
}

.sldie-leave {
}

.slide-leave-active {
    animation: slide-out 0.5s ease-out forwards;
}

@keyframes slide-in {
    from {
        transform: translateY(20px);
    }

    to {
        transform: translateY(0);
    }
}

@keyframes slide-out {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(20px);
    }
}
</style>
