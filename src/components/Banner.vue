<template>
    <section id="solution-banner" class="text-center">
        <div class="banner">
            <div class="container">
                <h3>
                    Whatever the Challenge,
                    <br />We Always Deliver A Solution
                </h3>
                <quote>
                    “ Identify your problems but give your power and energy to
                    solutions.” - Anonymous.
                </quote>
            </div>
            <button @click="toMyWork">Find Out More</button>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        toMyWork() {
            this.$router.push("/work");
        },
    },
};
</script>

<style scoped lang='scss'>
.text-center {
    text-align: center;
}

#solution-banner .banner {
    background: url(../img/banner.png) no-repeat center/cover;
    height: 50vh;
}

#solution-banner .banner button {
    padding: 0.9rem;
    margin: 2rem 0 3rem;
    border: none;
    border-radius: 50px;
    background-color: #de2f00;
    color: #f4f4f4;
    cursor: pointer;
    transition: transform 0.3s;
}

#solution-banner .banner button:hover {
    transition: transform 0.3s;
    transform: scale(1.1);
}

#solution-banner .container {
    color: #fff;
    display: block;
    padding-top: 8%;
    margin: auto;
}

#solution-banner .container h3 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

#solution-banner .container p {
    font-size: 1rem;
}

@media screen and (max-width: 500px) {
    #solution-banner .container h3 {
        font-size: 2rem;
    }

    #solution-banner {
        height: 50vh;
    }

    #solution-banner .container {
        padding: 2rem 3rem;
    }

    #solution-banner .banner button {
        margin-top: 1rem;
    }
}
</style>