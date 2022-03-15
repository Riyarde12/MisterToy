import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './css/style.css';
import { focusDirective, rainbowDirective, customOnDirective } from './directives';
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';


const app = createApp(App);

app.config.globalProperties.$filters = {
    currencyUSD(amount) {
        return '$' + amount;
    }
};

app.directive('focus', focusDirective);
app.directive('rainbow', rainbowDirective);
app.directive('custom-on', customOnDirective);

app.use(ElementPlus);
app.use(router);
app.use(store);
app.mount('#app');
