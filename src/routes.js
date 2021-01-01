import Home from "./views/Home.vue";
import DevWork from "./views/DevWork.vue";
import DesignWork from "./views/DesignWork.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";

export const routes = [
    { path: "", component: Home },
    { path: "/about", component: About },
    { path: "/dev-work", component: DevWork },
    { path: "/design-work", component: DesignWork },
    { path: "/contact", component: Contact },
];