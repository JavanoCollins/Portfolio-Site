<template>
    <div>
        <nav id="main-nav">
            <router-link to="/" tag="li">
                <a>Home</a>
            </router-link>

            <router-link to="/work" tag="li">
                <a>Work</a>
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
    data() {
        return {
            nav: ["Home", "About", "Contact", "My Work"]
        };
    }
};
</script>

<style lang='scss'>
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@400;600&display=swap");

* {
    font-family: "Dosis", sans-serif;
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
</style>