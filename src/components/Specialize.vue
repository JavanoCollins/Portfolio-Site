<template>
    <section id="specialize">
        <div>
            <h1>I Specialize In</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div class="bottom-line"></div>
            <p class="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Unde reprehenderit eos dolorem beatae.
            </p>
            <div class="specials container">
                <div>
                    <i class="fa fa-robot"></i>
                    <h3>Machine Learning</h3>Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Esse tempore ipsa iusto? Amet, delectus nesciunt.
                </div>
                <div>
                    <i class="fab fa-chrome"></i>
                    <h3>Fullstack Web Development</h3>Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Esse tempore ipsa iusto? Amet, delectus nesciunt.
                </div>
                <div>
                    <i class="fas fa-mobile"></i>
                    <h3>Mobile App Development</h3>Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Esse tempore ipsa iusto? Amet, delectus nesciunt.
                </div>
                <div>
                    <i class="fas fa-gamepad"></i>
                    <h3>Game Development</h3>Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Esse tempore ipsa iusto? Amet, delectus nesciunt.
                </div>
                <div>
                    <i class="fas fa-brush"></i>
                    <h3>Graphic Design</h3>Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Esse tempore ipsa iusto? Amet, delectus nesciunt.
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@400;600&display=swap");

#specialize {
    background-color: #f3f3f3;
    text-align: center;
    font-family: "Dosis";
}

h1 {
    font-size: 2rem;
    padding: 3rem 0 1rem;
    color: #da5131;
}

.specials {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin: 2rem 0;
}

.specials div {
    margin: 2rem;
}

.container {
    max-width: 1280px;
    padding: 4rem;
    margin:  auto;
    overflow: hidden;
}

i {
    color: #de2f00;
    font-size: 2rem;
    padding: 1rem;
}
</style>