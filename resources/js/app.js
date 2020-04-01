import { InertiaApp } from '@inertiajs/inertia-vue'
import Vue from 'vue'
// Vuesax Component Framework
import Vuesax from 'vuesax'

Vue.mixin({ methods: { route: (...args) => window.route(...args).url() } })
Vue.use(InertiaApp)
Vue.use(Vuesax)

window.micromatch = require('micromatch');
// Theme Configurations
import './themeConfig'

// Globally Registered Components
import './globalComponents'

// Vuex Store
import store from './src/store/store'

// Vuesax Admin Filters
import '@/src/filters/filters'

// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)

// PrismJS
import 'prismjs'
// import 'prismjs/themes/prism-tomorrow.css'

// Import Vue FilePond
import vueFilePond from 'vue-filepond';
// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';

const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview, FilePondPluginFileEncode);

Vue.component('FilePond', FilePond.default);
Vue.use(require('vue-moment'));


const app = document.getElementById('app')

new Vue({
    store,
    render: h => h(InertiaApp, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: name => import(`@/Pages/${name}`).then(module => module.default),
        },
    }),
}).$mount(app)
