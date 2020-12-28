<template>
    <section id="specialize">
        <div>
            <h1>I Specialize In</h1>
            <p>Fullstack Web Development, Graphic Design</p>
            <Specialize />
        </div>
    </section>
</template>

<script>
import Specialize from "./Specialize";
export default {
    components: {
        Specialize,
    },
};
</script>

<style scoped lang='scss'>
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@400;600&display=swap");

#specialize {
    background-color: #f3f3f3;
    text-align: center;
    font-family: "Dosis";
    margin: 0 auto;
}

h1 {
    font-size: 2rem;
    padding: 3rem 0 1rem;
    color: #da5131;
}
</style>