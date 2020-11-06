<template>
    <div>
        <div id="skills">
            <div id="html">
                <i class="fab fa-html5"></i>
                <p class="skill-name">Html5</p>
            </div>
            <div id="css3">
                <i class="fab fa-css3-alt"></i>
                <p class="skill-name">Css3</p>
            </div>
            <div id="js">
                <i class="fab fa-js"></i>
                <p class="skill-name">JavaScript</p>
            </div>
            <div id="python">
                <i class="fab fa-python"></i>
                <p class="skill-name">Python</p>
            </div>
            <div id="vue">
                <i class="fab fa-vuejs"></i>
                <p class="skill-name">Vue</p>
            </div>
            <div id="react">
                <i class="fab fa-react"></i>
                <p class="skill-name">React</p>
            </div>
            <div id="node">
                <i class="fab fa-node"></i>
                <p class="skill-name">Node</p>
            </div>
            <div id="mysql">
                <i class="fas fa-database"></i>
                <p class="skill-name">MySQL</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
#skills {
    display: flex;
    justify-content: space-around;
    padding: 2rem;
    background-color: black;

    p {
        padding: 1rem;
        font-size: 1.2rem;
        text-transform: uppercase;
    }

    i {
        font-size: 5.5rem;
        padding: 0 2rem;
        color: #fff;
        cursor: pointer;
        transition: color 0.2s;
    }
    div {
        color: #fff;
        text-align: center;
    }
    .fa-js:hover {
        color: #f8dc3d;
        transition: color 0.2s;
    }

    .fa-html5:hover {
        color: #da5131;
        transition: color 0.2s;
    }

    .fa-css3-alt:hover {
        color: #389fd8;
        transition: color 0.2s;
    }

    .fa-python:hover {
        color: #f8c34f;
        transition: color 0.2s;
    }

    .fa-vuejs:hover {
        color: #42b883;
        transition: color 0.2s;
    }

    .fa-node:hover {
        color: #7bc717;
        transition: color 0.2s;
    }

    .fa-react:hover {
        color: #5ed4f3;
        transition: color 0.2s;
    }
    .fa-database:hover {
        color: #ffb71c;
        transition: color 0.2s;
    }
}
</style>

