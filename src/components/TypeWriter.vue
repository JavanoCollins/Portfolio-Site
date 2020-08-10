<template>
    <div id="typewriter">
        <div id="header-content">
            <h1>
                I am Javano Collins.
                <span class="typed-text">{{ typeValue }}</span>
                <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
            </h1>
            <p class="lead">
                I specialize in Machine Learning, Web Development,
                Mobile Development, Game Development, and Graphic
                Design.
            </p>
            <a href="work.html" class="btn-light">View My Work</a>
            <router-link tag="button" class="btn-light">View My Work</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            typeValue: "",
            typeStatus: false,
            typeArray: [
                "Machine Learning Engineer",
                "Fullstack Developer",
                "Mobile App Developer"
            ],
            typingSpeed: 40,
            erasingSpeed: 80,
            newTextDelay: 800,
            typeArrayIndex: 0,
            charIndex: 0
        };
    },
    methods: {
        typeText() {
            if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
                if (!this.typeStatus) this.typeStatus = true;
                this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
                    this.charIndex
                );
                this.charIndex += 1;
                setTimeout(this.typeText, this.typingSpeed);
            } else {
                this.typeStatus = false;
                setTimeout(this.eraseText, this.newTextDelay);
            }
        },
        eraseText() {
            if (this.charIndex > 0) {
                if (!this.typeStatus) this.typeStatus = true;
                this.typeValue = this.typeArray[this.typeArrayIndex].substring(
                    0,
                    this.charIndex - 1
                );
                this.charIndex -= 1;
                setTimeout(this.eraseText, this.erasingSpeed);
            } else {
                this.typeStatus = false;
                this.typeArrayIndex += 1;
                if (this.typeArrayIndex >= this.typeArray.length)
                    this.typeArrayIndex = 0;
                setTimeout(this.typeText, this.typingSpeed + 1000);
            }
        }
    },
    created() {
        setTimeout(this.typeText, this.newTextDelay + 200);
    }
};
</script>

<style lang='scss' scoped>
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@400;500&display=swap");

* {
    font-family: "Dosis", sans-serif;
}

#typewriter {
    height: 90vh;
}
#header-content {
    padding-top: 16%;
}
#header-content h1 {
    font-size: 4rem;
    line-height: 1.2;
}
#header-content #name {
    color: #333;
}

.btn-main,
.btn-light,
.btn-dark {
    display: inline-block;
    padding: 1rem 1.3rem;
    transition: all 0.5s;
    border: none;
    cursor: pointer;
    margin: 1rem 0;
}

.btn-light {
    color: #333;
    background-color: #f4f4f4;
}

button[class^="btn-"]:hover,
a[class^="btn-"]:hover,
input[class^="btn-"]:hover {
    background-color: #47e5bc;
}

.container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
h1 {
    font-size: 6rem;
    font-weight: 500;
    span.typed-text {
        color: #da5131;
    }
}

span.cursor {
    display: inline-block;
    margin-left: 3px;
    width: 4px;
    background-color: #fff;
    animation: cursorBlink 1s infinite;
}

span.cursor.typing {
    animation: none;
}

@keyframes cursorBlink {
    49% {
        background-color: #fff;
    }
    50% {
        background-color: transparent;
    }
    99% {
        background-color: transparent;
    }
}
</style>