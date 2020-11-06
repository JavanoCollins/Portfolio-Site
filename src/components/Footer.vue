<template>
    <div>
        <footer id="main-footer">
            <div class="container footer-container">
                <div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Autem, sed? Illum eos amet magnam non quibusdam
                        tempora rem adipisci similique!
                    </p>
                </div>
                <div id="email-newsletter">
                    <h3>Email Newsletter</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <form name="contact" method="POST" data-netlify="true">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                        />
                        <input
                            type="submit"
                            value="Subscribe"
                            class="btn btn-primary"
                        />
                    </form>
                </div>
                <!-- <div>
                    <h2>Join Our Club</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, veniam.</p>
                    <a href="#" class="btn btn-secondary">Join Now</a>
                </div> -->
                <div>
                    <h3>Site Links</h3>
                    <ul class="list">
                        <li><a href="#">Help & Support</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div id="copyright-container">
                    <p>Copyright &copy; 2020, All Rights Reserved</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
#main-footer {
    background: #333;
    color: #f4f4f4;
    margin: auto;
}

#main-footer img {
    width: 150px;
}

#main-footer a {
    color: #f4f4f4;
}

#main-footer .footer-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem 3rem;
    padding: 3rem;
    margin: 0 auto;
}

#main-footer .container > *:last-child {
    background: #444;
    display: grid;
    grid-column: 1 / span 4;
    text-align: center;
    padding: 0.5rem;
    font-size: 1.1rem;
}

#email-newsletter {
    input[type="email"] {
        padding: 0.5rem;
        margin: 0 0 0.5rem;
        width: 100%;
    }

    input[type="submit"] {
        padding: 0.5rem;
        width: 100%;
        cursor: pointer;
        background-color: #de2f00;
        border: none;
        color: #fff;
    }
}

@media screen and (max-width: 500px) {
    #main-footer .footer-container {
        grid-template-columns: repeat(1, 1fr);
        display: block;

        div {
            margin-bottom: 2rem;
        }
    }
}
</style>