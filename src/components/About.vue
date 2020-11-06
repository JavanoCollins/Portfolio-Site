<template>
    <div class="container">
        <div class="about-me">
            <h1>{{ title1 }}</h1>
            <p>
                I'm Javano Collins, currently a Software Engineering major at
                <a id="btvi" :href="'//' + btviUrl" target="_blank">BTVI</a> 🏫
                . As a Software Engineer, I have fallen in love with web
                technologies, and find a academic and career interest in Machine
                Learning.
            </p>
            <br />
            <p>
                Additional things about me: <br />
                I am a boxer, <br />
                I am an avid reader (subjects: finance, psychology, history,
                stem) <br />
                I love marine science and I self-proclaim to be an advocate for
                environmental health. An additional passion of mine lies in
                applying technology to marine science to save the ocean.
            </p>
            <br />

            <p>
                Some of the tools I use:<br />
                Vue, React, Node, Sass, Python, MySQL, Photoshop, Illustrator,
                XD, Figma, Git, GitHub, VSCode, Postman
            </p>
            <img
                id="tools-banner"
                src="../assets/img/github-banner.jpg"
                alt=""
                srcset=""
            />
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            title1: "ABOUT ME",
            btviUrl: "btvi.edu.bs",
        };
    },
};
</script>

<style scoped>

h1 {
    font-size: 5rem;
    text-transform: capitalize;
    color: #da5131;
    margin-bottom: 1rem;
}

p {
    width: 85%;
    font-size: 1.3rem;
    font-family: Lato;
    line-height: 1.7;
}

.about-me {
    margin: 6rem auto;
    /* height: 80vh; */
}

#btvi {
    color: #da5131;
    font-weight: bold;
}

#tools-banner {
    width: 80%;
    margin-top: 4rem;
}

@media screen and (max-width: 500px) {
    h1 {
        text-align: center;
        margin: auto;
        margin-bottom: 3rem;
        font-size: 4rem;
    }
    .about-me {
        /* text-align: center; */
        margin: auto;
    }

    p {
        width: 100%;
        font-size: 1.1rem;
        font-family: Lato;
        line-height: 1.7;
    }

    #tools-banner {
        width: 100%;
    }
}
</style>
