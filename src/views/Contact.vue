<template>
    <div class="container">
        <div id="contact-form">
            <h1>Shoot Me A Message</h1>
            <form method="POST" action="/contact">
                <!-- Name -->
                <label for="name">Name:</label>
                <div>
                    <input
                        type="name"
                        placeholder="Name"
                        size="40"
                        name="name"
                        class="input-field"
                    />
                </div>

                <!-- Email -->
                <label for="email">Email:</label>
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        size="40"
                        name="email"
                        class="input-field"
                    />
                </div>

                <!-- Phone -->
                <label for="phone">Phone:</label>
                <div>
                    <input
                        type="phone"
                        placeholder="Phone"
                        size="40"
                        name="phone"
                        class="input-field"
                    />
                </div>

                <!-- Subject -->
                <label for="name">Subject:</label>
                <div>
                    <input
                        type="text"
                        placeholder="Subject"
                        size="40"
                        name="subject"
                        class="input-field"
                    />
                </div>

                <!-- Message -->
                <label for="email">Message:</label>
                <div>
                    <textarea
                        rows="13"
                        cols="80"
                        placeholder="Feel free to shoot me a message"
                        name="message"
                    />
                </div>
                <button type="submit" class="btn-light">Send Email</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
#contact-form {
    margin: 6rem auto;
    height: 100vh;
    margin-bottom: 10rem;
}

form {
    width: 40%;
}

h1 {
    font-family: Dosis, Arial;
    font-size: 5rem;
    text-transform: uppercase;
    color: #da5131;
    margin-bottom: 1rem;
}

input {
    padding: 0.6rem 1rem;
    width: 100%;
}

.input-field {
    margin-bottom: 1.5rem;
}

textarea {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    width: 100%;
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
    background-color: #da5131;
}

@media screen and (max-width: 500px) {
    h1 {
        font-size: 3.5rem;
    }

    #contact-form {
        margin: 1rem auto;
        height: auto;
    }

    input {
        width: 100%;
        padding: 1rem;
    }
    textarea {
        width: 100%;
    }

    label {
        padding-top: 1rem;
        font-size: 1.2rem;
    }

    form {
        div {
            margin: 1.5rem 0;
        }
    }
}
</style>