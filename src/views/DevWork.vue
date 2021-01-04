<template>
    <div class="container work-vue">
        <div class="work">
            <h1>Dev Work</h1>
            <p>Check out some of my projects</p>
        </div>
        <h2 id="under-maintenance">**Under Maintenance**</h2>
        <div class="work-grid">
            <app-dev-work-box
                image-url="item1.png"
                project-title="King's Castle"
                project-url="http://instagram.com"
                project-type="Website"
                projectDescription="Vegan Restaurant"
                project-tech="Vue, Sass, Node/Express, MySQL"
            ></app-dev-work-box>

            <app-dev-work-box
                image-url="item2.png"
                project-title="Great Designs"
                project-url="http://udemy.com"
                project-tech="React, Sass, Node"
            ></app-dev-work-box>

            <app-dev-work-box
                image-url="item3.png"
                project-title="Quote Generator"
                project-url="https://blooming-chamber-25642.herokuapp.com/"
                projectDescription="Random Quote Generator"
                project-tech="Vue, Sass"
            ></app-dev-work-box>
        </div>
        <!-- <h2>Other notable projects</h2>  -->
    </div>
</template>

<script>
import DevWorkBox from "../components/DevWorkBox";
export default {
    components: {
        appDevWorkBox: DevWorkBox,
    },
    methods: {
        navigateHome() {},
    },
};
</script>

* {
    font-family: "Dosis", sans-serif;
}

<style scoped lang='scss'>
.work {
    margin: 6rem auto 0;
    text-align: center;
}

.work-vue {
    height: 100vh;
    margin: auto;
}

h1 {
    font-size: 5rem;
    text-transform: capitalize;
    color: #da5131;
    margin-bottom: 1rem;
}

h2 {
    font-size: 2rem;
    text-transform: capitalize;
    text-align: center;
    color: #da5131;
    margin: 2rem;
}

#under-maintenance {
    color: #47E5BC;
}

.work-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.5rem;
    margin: 1rem;
}

@media screen and (max-width: 500px) {
    .work {
        margin: 0rem auto 0;
    }

    .work-vue {
        height: auto;
    }

    .work-grid {
        grid-template-columns: repeat(1, 1fr);
    }

    h1 {
        font-size: 4rem;
    }

    p {
        font-size: .9rem;
    }
}
</style>
