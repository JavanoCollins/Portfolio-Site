<template>
    <!-- Section A: Gallery -->
    <section id="work-a" class="text-center py-2">
        <div class="container">
            <div class="items">
                <div class="item">
                    <div class="item-image">
                        <img :src="require(`../assets/img/items/${imageUrl}`)" />
                    </div>
                    <div class="item-text">
                        <div class="item-text-wrap">
                            <p class="item-text-category">{{ projectType }}</p>
                            <h2 class="item-text-title">{{ projectTitle }}</h2>
                            <p>{{projectDescription}}</p>
                            <a class="btn-light" v-bind:href="projectUrl" target="_blank">Check It Out</a>
                        </div>
                    </div>
                </div>
            </div>
            <h3 class="project-tech">{{projectTech}}</h3>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        imageUrl: String,
        projectTitle: String,
        projectUrl: String,
        projectType: String,
        projectDescription: String,
        projectTech: String
    },
    data: () => {
        return {
            title: { name: "Hello World" }
        };
    },
    methods: {
        goToUrl() {
            console.log("object");
        }
    }
};
</script>

<style scoped>
.work-box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.5rem;
    margin: 1rem;
}

.container {
    max-width: 1280px;
    padding: 0 1.5rem;
    margin: auto;
    overflow: hidden;
}

.project-tech {
    margin: 1.5rem;
    color: #DA5131;
}

.text-center {
    text-align: center;
}

.btn-main,
.btn-light,
.btn-dark {
    display: inline-block;
    padding: .7rem 1rem;
    transition: all 0.5s;
    border: none;
    cursor: pointer;
    margin: 1rem 0;
}

.btn-light {
    background-color: #DA5131;
    color: #fff;
}

.btn-light:hover {
    background-color: #da5031dc;
}

.py-2 {
    padding: 2rem 0;
}

.item {
    position: relative;
    background: #333;
    overflow: hidden;
    cursor: pointer;
}
.item::after {
    content: "";
    position: absolute;
    display: block;
    background: inherit;
    opacity: 0.8;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale(2) translateX(-75%) translateY(-75%) rotate(-28deg);
    transition: transform 1.5s cubic-bezier(0.2, 1, 0.3, 1);
}
.item:hover::after {
    transform: scale(2) translateX(0) translateY(0) rotate(-28deg);
}
.item-image {
    transition: transform 0.5s;
}
.item:hover .item-image {
    transform: scale(1.1);
    transition: transform 0.5s;
}
.item:hover .item-text {
    opacity: 1;
    transform: translateY(0);
}
.item-image {
    height: auto;
    display: block;
    border: #DA5131 solid 1px;
    transform: translateZ(0);
    transition: transform 750ms cubic-bezier(0.2, 1, 0.3, 1);
}
.item-image:before {
    content: "";
    display: block;
    padding-top: 75%;
    overflow: hidden;
}
.item-image img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 270px;
    line-height: 0;
}

.item-text {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    text-align: center;
    z-index: 1;
    color: #fff;
    transform: translateY(-20%);
    transition: opacity 500ms cubic-bezier(0.2, 1, 0.3, 1),
        transform 500ms cubic-bezier(0.2, 1, 0.3, 1);
    transition-delay: 200ms;
}
.item-text-wrap {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
}
.item-text-title {
    font-size: 2rem;
    padding: 0 1rem;
    margin: 5px 0;
}
.item-text-category {
    text-transform: uppercase;
    font-size: 1.2rem;
    opacity: 0.7;
    margin: 0;
}

@media (max-width: 800px) {
    #header-home {
        height: 100vh;
    }
    #header-home .header-content {
        padding-top: 5rem;
    }
}

@media (max-width: 500px) {
    #main-nav {
        flex-direction: column;
        align-items: center;
    }
    #main-nav li {
        padding: 1rem;
    }
    #header-home {
        height: 40rem;
        text-align: center;
        background-position: 20%;
    }
    #header-home .header-content > h1 > .txt-type {
        display: none;
    }
    #header-inner {
        height: 20rem;
    }
    #home-a {
        height: 100%;
    }
    #home-a .specials,
    .items,
    #main-footer .footer-container {
        grid-template-columns: 1fr;
    }
    #main-footer .container > *:last-child {
        grid-column: 1;
        background: #444;
        display: grid;
        padding: 0.5rem;
        font-size: 1.1rem;
    }
}
</style>