import Home from './views/Home.vue';
import Work from './views/Work.vue';
import About from './views/About.vue';
import Contact from './views/Contact.vue';

export const routes = [
    {path: '', component: Home},
    {path: '/about', component: About},
    {path: '/work', component: Work},
    {path: '/contact', component: Contact}
]