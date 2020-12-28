<template>
    <div class="specials container">
        <div class="specialization" v-for="(item, index) in icons" :key="item">
            <i :class="icons[index]"></i>
            <h3>{{ titles[index] }}</h3>
            <p class="specialize-description">{{ descriptions[index] }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ["icon", "title", "description"],
    data() {
        return {
            icons: ["fab fa-chrome", "fas fa-brush"],
            titles: ["Fullstack Web Development", "Graphic Design"],
            descriptions: [
                "I am a Fullstack Developer. The tools I work with are mainly Vue, React, Node, and MySQL. However, I am always open to learning new technologies. I ensure that applications are beautiful, performant, and mobile responsive.",
                "I have an extensive background in graphic design. Ispecialize in logos, flyers, business cards, and mobile and desktop website mockups.",
            ],
        };
    },
};
</script>

<style lang='scss' scoped>
.specials {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 2rem 0;

    .specialize-description {
        padding-top: 0.5rem;
        width: 60%;
        margin: auto;
    }
}

.container {
    max-width: 1280px;
    padding: 4rem;
    margin: auto;
    overflow: hidden;
}

i {
    color: #de2f00;
    font-size: 2rem;
    margin: 0 0 1rem 0;
}

@media screen and (max-width: 500px) {
    .specials {
        grid-template-columns: repeat(1, 1fr);

        .specialize-description {
            width: 100%;
        }
    }

    .container {
        padding: 3rem;
    }

    .specialization {
        padding: 2rem 0;
        line-height: 1.3rem;
    }
}
</style>