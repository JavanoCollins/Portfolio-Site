<template>
    <div class="container">
        <div class="about-me">
            <h1>{{ title1 }}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ducimus, repellendus quas optio, sed atque fugit fuga quia cum accusamus incidunt nesciunt sequi soluta expedita modi dicta iste blanditiis beatae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit ad, quaerat, accusantium quod nam sint pariatur error earum modi veniam quidem vitae dolor eius quo Quia illo libero facilis itaque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eum ut nulla sed aut, praesentium saepe distinctio quaerat quidem eos tempore fugiat reprehenderit voluptatibus non suscipit nihil adipisci iste obcaecati?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat sed dolore optio impedit numquam accusamus, blanditiis ex magni eveniet doloribus laudantium ullam nesciunt nobis, reprehenderit inventore, quas sapiente itaque dolores!</p>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            title1: "ABOUT ME",
        };
    }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@400;600&display=swap");

h1 {
    font-family: Dosis, Arial;
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
    height: 80vh;
}

</style>

let stillAlive = true;
while(stillAlive) {
    wearMask();
    socialDistance();
    washHands();
    getTested();
}
