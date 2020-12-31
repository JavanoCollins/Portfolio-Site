<template>
    <!-- Section A: Gallery -->
    <section id="work-a" class="text-center py-2">
        <div class="container">
            <img :src="require(`../assets/design-work/${directory}/${imageUrl}`)" alt="">
        </div>
    </section>
</template>

<script>
export default {
    props: {
        imageUrl: String,
        directory: String
    },
    data: () => {
        return {
        
        };
    },
    methods: {
        goToUrl() {
            console.log("object");
        }
    }
};
</script>

<style scoped>
.work-box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.5rem;
    margin: auto;
}

.container {
    max-width: 1280px;
    padding: 0 1.5rem;
    margin: auto;
    overflow: hidden;
}

img {
    width: 380px;
}

@media (max-width: 800px) {
    #header-home {
        height: 100vh;
    }
    #header-home .header-content {
        padding-top: 5rem;
    }
}

@media (max-width: 500px) {
    img {
    width: 380px;
}

}
</style>