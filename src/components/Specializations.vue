<template>
    <section id="specialize">
        <!-- <div>
            <h1>I Specialize In</h1>
            <p>Fullstack Web Development, Graphic Design</p>
        </div> -->
        <div class="specials container">
            <Specialize
                class="one"
                icon="fab fa-chrome"
                title="Fullstack Developer"
                description="I am a Fullstack Developer always open to learning new technologies. I ensure that applications are beautiful, performant, and mobile responsive."
                subtitles="Languages I speak"
                :subtools="webSubTools"
                :tools="webTools"
            />
            <Specialize
                class="two"
                icon="fas fa-brush"
                title="Designer"
                description="I have an extensive background in graphic design. I specialize in mobile and web design, logos, flyers, and business cards."
                subtitles="I enjoy designing"
                :subtools="designSubTools"
                :tools="designTools"
            />
        </div>
    </section>
</template>

<script>
import Specialize from "./Specialize";
export default {
    components: {
        Specialize,
    },
    data() {
        return {
            webTools: ["Adobe XD", "Illustrator", "Photoshop"],
            designTools: [
                "VS Code",
                "Git",
                "Github",
                "Postman",
                "PyCharm",
                "Terminal",
            ],
            webSubTools: [
                "JavaScript",
                "Vue",
                "React",
                "SASS",
                "Node",
                "Python",
                "MySQL",
            ],
            designSubTools: ["UX", "UI", "Logos", "Flyers", "Web", "Mobile"],
        };
    },
};
</script>

<style scoped lang='scss'>
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@400;600&display=swap");

#specialize {
    background: linear-gradient(to left, #d12d00, #ff6c43);
    text-align: center;
    font-family: "Dosis";
    margin: 0 auto;
}

.one {
    border-radius: 20px 0 0 20px;
}

.two {
    border-radius: 0 20px 20px 0;
}

.specials {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 2rem 0;
}

.container {
    max-width: 1280px;
    padding: 4rem 10rem;
    margin: auto;
    overflow: hidden;
}

h1 {
    font-size: 2rem;
    padding: 3rem 0 1rem;
    color: #da5131;
}

@media screen and (max-width: 500px) {
    .specials {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        margin: 2rem 0;
    }

    .container {
        max-width: 1280px;
        padding: 1rem .5rem;
        margin: auto;
        overflow: hidden;
    }

    .one {
        border-radius: 20px;
        margin: 1rem 0;
    }

    .two {
        margin: 1rem 0;
        border-radius: 20px;
    }
}
</style>