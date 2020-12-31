<template>
    <div class="specialization">
        <i :class="icon"></i>
        <h3 class="title">{{ title }}</h3>
        <p class="description">{{ description }}</p>
        <div class="subtitles-div">
            <p class="subtitles">{{ subtitles }}:</p>
            <p class="subtool" v-for="(item, index) in subtools" :key="item">
                {{ subtools[index] }}
            </p>
        </div>
        <div class="tools-div">
            <p class="toolsType">{{ toolsType }} Tools:</p>
            <p class="tools" v-for="(item, index) in tools" :key="item">
                {{ tools[index] }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        icon: String,
        title: String,
        description: String,
        subtitles: String,
        subtools: Array,
        tools: Array,
        toolsType: String,
    },
    data() {
        return {
            toolsTypeq: ["Dev", "Design"],
        };
    },
};
</script>

<style lang='scss' scoped>
.specialization {
    border: 0.5px solid #e7e7e770;
    /* box-shadow: 0px 0px 2px 0px rgba(128, 128, 128, 0.75); */
    padding: 3rem 1rem;
    background-color: #fff
}

.title {
    font-size: 1.8rem;
    margin-bottom: 1rem;
}

.description {
    padding-top: 0.5rem;
    font-size: 1.1rem;
    line-height: 1.6rem;
    letter-spacing: 0.03rem;
    width: 80%;
    margin: 0 auto 3rem;
}

i {
    color: #de2f00;
    font-size: 3.5rem;
    margin: 0 0 1rem 0;
}

.subtitles {
    margin: 1rem 0;
    color: #de2f00;
    font-size: 1.2rem;
    font-weight: bold;
}

.subtool {
    font-size: 1.2rem;
}

.tools-div {
    margin: 1rem 0;

    .toolsType {
        color: #de2f00;
        font-weight: bold;
        font-size: 1.2rem;
        margin: .5rem 0;
    }

    .tools {
        font-size: 1.2rem;
    }
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