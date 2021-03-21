import Vue from 'vue'
import App from './App.vue'
import VueQuillEditor from "vue-quill-editor";
import store from "./store";

import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

Vue.use(VueQuillEditor);
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
