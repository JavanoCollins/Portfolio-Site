<template>
    <div>
        <div class="container">
            <app-type-writer></app-type-writer>
        </div>
            <app-specialize></app-specialize>
            <app-languages></app-languages>
            <app-banner></app-banner>
    </div>
</template>

<script>
import TypeWriter from "./TypeWriter.vue";
import Specialize from "./Specialize.vue";
import Languages from "./Languages.vue";
import Banner from "./Banner.vue";
export default {
    components: {
        appTypeWriter: TypeWriter,
        appSpecialize: Specialize,
        appLanguages: Languages,
        appBanner: Banner
    }
};
</script>

<style>

#skills {
    display: flex;
    justify-content: space-around;
    padding: 2rem;
    background-color: black;
}

#skills i {
    font-size: 5.5rem;
    padding: 0 2rem;
    color: #fff;
    cursor: pointer;
    transition: color 0.2s;
}

#skills .fa-js:hover {
    color: #f8dc3d;
    transition: color 0.2s;
}

#skills .fa-html5:hover {
    color: #da5131;
    transition: color 0.2s;
}

#skills .fa-css3-alt:hover {
    color: #389fd8;
    transition: color 0.2s;
}

#skills .fa-python:hover {
    color: #f8c34f;
    transition: color 0.2s;
}

#skills .fa-vuejs:hover {
    color: #42b883;
    transition: color 0.2s;
}

#skills .fa-node:hover {
    color: #7bc717;
    transition: color 0.2s;
}

#skills .fa-mobile-alt:hover {
    color: #ca2020;
    transition: color 0.2s;
}

#html,
#css3,
#js,
#python,
#vue,
#node,
#mobile {
    color: #fff;
    text-align: center;
}

#html p,
#css3 p,
#js p,
#python p,
#vue p,
#node p,
#mobile p {
    padding: 1rem;
    font-size: 1.2rem;
    text-transform: uppercase;
}
</style>