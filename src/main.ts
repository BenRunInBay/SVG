/**
 * webapp main
 * @purpose Load core frameworks, store, app and CSS and initialize Vue app
 * @date 2022-01-07
 */
import { createApp } from 'vue'
import { router } from "./router"
import App from './App.vue'
import CodeBlock from "./components/CodeBlock.vue";

import "./ui.css";
import "animate.css";

const app = createApp(App);
app.use(router);
app.component("CodeBlock", CodeBlock);
app.mount('#app');
