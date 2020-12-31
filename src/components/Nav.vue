<template>
    <div>
        <div id="menu-btn" @click="showMenuBtn">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <nav id="main-nav" :style="{display: showMenu ? 'none' : 'flex'}" >
            <router-link to="/" tag="li">
                <a>Home</a>
            </router-link>

            <router-link to="/dev-work" tag="li">
                <a>Dev Work</a>
            </router-link>

            <router-link to="/design-work" tag="li">
                <a>Design Work</a>
            </router-link>

            <router-link to="/about" tag="li">
                <a>About</a>
            </router-link>

            <router-link to="/contact" tag="li">
                <a>Contact</a>
            </router-link>
        </nav>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            showMenu: false
        };
    },
    methods: {
        showMenuBtn() {
            this.showMenu = !this.showMenu
        },
    },
};
</script>

<style lang='scss' scoped>
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@400;600&display=swap");

* {
    font-family: "Dosis", sans-serif;
}

#menu-btn {
    display: none;
    div {
        width: 35px;
        height: 3px;
        background-color: #333;
        margin: 6px 0;
        transition: 0.4s;
    }
}

li {
    font-size: 16px;
    padding: 0 16px;
    display: flex;
}

a {
    color: #000;
}

#main-nav {
    display: flex;
    padding-top: 1rem;
    position: sticky;
    top: 0;
    z-index: 2;
}

#main-nav ul {
    display: flex;
    position: sticky;
}

#main-nav li {
    padding: 1rem 1.5rem 1rem 0;
    position: sticky;
}

#main-nav a {
    text-decoration: none;
    color: #333;
    text-transform: uppercase;
    border-bottom: 3px transparent solid;
    padding-bottom: 0.5rem;
    transition: border-color 0.5s;
}

#main-nav a:hover {
    border-color: #f44006;
}

#main-nav a.current {
    border-color: #de2f00;
}

@media screen and (max-width: 500px) {
    #main-nav {
        flex-direction: column;
        justify-content: center;
        display: none;
    }

    #main-nav li {
        padding: 0.5rem;
        position: sticky;
    }

    #menu-btn {
        display: block;
    }
}
</style>