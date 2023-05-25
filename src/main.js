import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import components from '@/components';
import directives from '@/directives';
import VueScrollTo from 'vue-scrollto';
import {VueMasonryPlugin} from 'vue-masonry';
import VueLazyLoad from 'vue3-lazyload'

const app = createApp(App);
app.use(router);

// Global variables
//app.config.globalProperties.$globalPath = window.location.origin + '/thegem5live/test/static';
app.config.globalProperties.$globalPath = window.location.origin + '/thegem/demos-overlay/static';
app.config.globalProperties.$offset = 20;
app.config.globalProperties.$loadmore = 20;
app.config.globalProperties.$scrollToParams = {
    el: '.wrapper',
    container: 'body',
    easing: 'easy',
    duration: 400,
    offset: 0
};

/**Global actions variables
 * midyear - 40% - $39
 * envatobirthday - 40% - $39
 * megamarch - 40% - $39
 * octobersale - 30% - $39
 * baw1 (black friday) - 50% - $39
 * baw3 (cyber monday) - 40% - $39
 */
app.config.globalProperties.$action = false;
app.config.globalProperties.$actionName = "megamarch";
app.config.globalProperties.$actionSale = "40%";
app.config.globalProperties.$actionPrice = "$39";

// Third party components/directives
app.use(VueScrollTo);
app.use(VueMasonryPlugin);
app.use(VueLazyLoad);

// Custom directives
directives.forEach(directive => {
    app.directive(directive.name, directive);
});

// Custom components
components.forEach(component => {
    app.component(component.name, component);
});

app.mount('#app');