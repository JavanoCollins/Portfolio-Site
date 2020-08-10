<template>
    <section id="solution-banner" class="text-center">
        <div class="banner">
            <div class="container">
                <h3>
                    Whatever the Challenge,
                    <br />We Always Deliver A Solution
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />Mollitia asperiores nulla voluptate amet eligendi aliquam nam? Ipsa sed esse placeat.
                </p>
            </div>
            <button>Find Out More</button>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style scoped>
.text-center {
    text-align: center;
}

#solution-banner .banner {
    background: url(../img/banner.png) no-repeat center/cover;
    height: 60vh;
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
}
#solution-banner .container h3 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}
#solution-banner .container p {
    font-size: 1rem;
}
</style>