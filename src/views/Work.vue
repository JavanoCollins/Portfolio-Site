<template>
    <div class="container work-vue">
        <div class="work">
            <h1>My Work</h1>
            <p>Check out some of my projects</p>
        </div>
        <div class="work-grid">
            <app-work-box
                image-url="item1.png"
                project-title="King's Castle"
                project-url="http://youtube.com"
                project-type="Website"
                projectDescription="Vegan Restaurant"
            ></app-work-box>

            <app-work-box
                image-url="item2.png"
                project-title="Great Designs"
                project-url="http://udemy.com"
            ></app-work-box>

            <app-work-box
                image-url="item3.png"
                project-title="Great Designs"
            ></app-work-box>
        </div>
        <h2>Other notable projects</h2>
    </div>
</template>

<script>
import WorkBox from "../components/WorkBox";
export default {
    components: {
        appWorkBox: WorkBox,
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
    margin-bottom: 1rem;
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
