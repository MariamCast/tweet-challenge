import Vue from 'vue'
import Layout from './vue/Layout.vue'
import router from './router'
import 'bootstrap';


const app = new Vue({
    router,
...Layout
});

export {app, router}



