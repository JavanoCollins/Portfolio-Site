import Home from './components/Home.vue';
import Work from './components/Work.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';

export const routes = [
    {path: '', component: Home},
    {path: '/about', component: About},
    {path: '/work', component: Work},
    {path: '/contact', component: Contact},
]