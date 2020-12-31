<template>
    <div class="container work-vue">
        <div class="work">
            <h1>Design Work</h1>
            <p>Check out some of my projects</p>
        </div>

        <!-- //Logos -->
        <h2 id="logos" class="subtitle">Logos</h2>
        <div class="work-grid">
            <app-design-work-box 
                directory="logos" 
                imageUrl="logo-1.png">
            </app-design-work-box>

            <app-design-work-box
                directory="logos"
                imageUrl="logo-6.png"
            ></app-design-work-box>

            <app-design-work-box
                directory="logos"
                imageUrl="logo-3.png"
            ></app-design-work-box>

            <app-design-work-box
                directory="logos"
                imageUrl="logo-2.png"
            ></app-design-work-box>

            <app-design-work-box
                directory="logos"
                imageUrl="logo-4.png"
            ></app-design-work-box>

            <app-design-work-box
                directory="logos"
                imageUrl="logo-5.jpg"
            ></app-design-work-box>

            <app-design-work-box
                directory="logos"
                imageUrl="logo-8.png"
            ></app-design-work-box>

            <app-design-work-box
                directory="logos"
                imageUrl="logo-7.png"
            ></app-design-work-box>

            <app-design-work-box
                directory="logos"
                imageUrl="logo-9.png"
            ></app-design-work-box>
        </div>

        <!-- //Flyers -->
        <h2 id="flyers" class="subtitle">Flyers</h2>
        <div class="work-grid">
            <app-design-work-box 
                directory="flyers" 
                imageUrl="flyer-1.png">
            </app-design-work-box>
            <app-design-work-box 
                directory="flyers" 
                imageUrl="flyer-2.png">
            </app-design-work-box>
            <app-design-work-box 
                directory="flyers" 
                imageUrl="flyer-5.png">
            </app-design-work-box>
            <app-design-work-box 
                directory="flyers" 
                imageUrl="flyer-4.png">
            </app-design-work-box>
            <app-design-work-box 
                directory="flyers" 
                imageUrl="flyer-6.jpg">
            </app-design-work-box>
            <app-design-work-box 
                directory="flyers" 
                imageUrl="flyer-3.png">
            </app-design-work-box>
        </div>
    </div>
</template>

<script>
import DesignWorkBox from "../components/DesignWorkBox";
export default {
    components: {
        appDesignWorkBox: DesignWorkBox,
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
    margin: 6rem auto 2rem;
    text-align: center;
}

.work-vue {
    /* height: 100vh; */
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
    margin: 3rem 0;
}

.subtitle {
    font-size: 3rem;
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
        font-size: 0.9rem;
    }
}
</style>
