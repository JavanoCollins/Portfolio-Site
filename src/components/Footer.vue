<template>
    <div>
        <footer id="main-footer">
            <div class="container footer-container">
                <div class="social-links">
                    <a :href="socialLinks.linkedin" target="_blank"
                        ><i class="fab fa-linkedin"></i
                    ></a>
                    <a :href="socialLinks.instagram" target="_blank"
                        ><i class="fab fa-instagram"></i
                    ></a>
                    <a :href="socialLinks.twitter" target="_blank"
                        ><i class="fab fa-twitter"></i
                    ></a>
                    <a :href="socialLinks.github" target="_blank"
                        ><i class="fab fa-github"></i
                    ></a>
                </div>
                <div class="site-links">
                    <router-link to="/about" tag="li"><a>About</a></router-link>

                    <router-link to="/contact" tag="li"
                        ><a>Contact</a></router-link
                    >
                    <router-link to="/work" tag="li"
                        ><a>My Work</a></router-link
                    >
                    <li>
                        <a :href="socialLinks.github" target="_blank">GitHub</a>
                    </li>
                </div>
                <div>
                    <p id="copyright">&copy; 2021 Javano Collins</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/javano-collins/",
                twitter: "https://twitter.com/JavanoCollins",
                instagram: "https://www.instagram.com/javanocollins/",
                github: "https://github.com/JavanoCollins",
            },
        };
    },
};
</script>

<style lang='scss' scoped>
#main-footer {
    background: rgb(26, 26, 26);
    color: #f4f4f4;
    margin: auto;
    padding: 5rem;

    a {
        color: rgb(165, 165, 165);
        font-size: 1.1rem;
        transition: all 0.1s;

        &:hover {
            color: #da5131;
            transition: all 0.1s;
        }
    }
}

.footer-container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .social-links {
        display: flex;

        .fab {
            font-size: 2rem;
            padding: 0 0.5rem;
            cursor: pointer;
            transition: all 0.2s;
        }

        .fa-linkedin {
            &:hover {
                color: #0e76a8;
                transition: all 0.2s;
            }
        }

        .fa-instagram {
            &:hover {
                color: #e1306c;
                transition: all 0.2s;
            }
        }

        .fa-twitter {
            &:hover {
                color: #1da1f2;
                transition: all 0.2s;
            }
        }

        .fa-github {
            &:hover {
                color: #fff;
                transition: all 0.2s;
            }
        }
    }

    .site-links {
        display: flex;
        margin: 2.5rem;

        a {
            padding: 1.5rem;
        }
    }
}

@media screen and (max-width: 500px) {
    .footer-container {
        .site-links {
            margin: 2rem 0.1rem;
            a {
                padding: 1rem;
            }
        }
    }
}
</style>