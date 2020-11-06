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
            project-url="http://udemy.com"></app-work-box>

            <app-work-box 
            image-url="item3.png" 
            project-title="Great Designs"></app-work-box>
        </div>
        <h1>Other notable projects</h1>
    </div>
</template>

<script>
import WorkBox from "../components/WorkBox.vue";
export default {
    components: {
        appWorkBox: WorkBox
    },
    methods: {
        navigateHome() {}
    }
};
</script>

* {
    font-family: "Dosis", sans-serif;
}

<style scoped>
.work {
    margin: 3rem auto;
    text-align: center;
}

.work-vue {
    height: 100vh;
    margin: auto;
}

h1 {
    font-family: Dosis, Arial;
    font-size: 2rem;
    text-transform: capitalize;
    color: #da5131;
    margin-bottom: 1rem;
    text-align: center;
}

.work-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.5rem;
    margin: 1rem;
}
</style>
