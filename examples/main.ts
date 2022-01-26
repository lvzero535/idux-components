import { createApp } from 'vue'
import App from './App.vue'

// import IsButton from '@sdv/components/button';
import '@sdv/components/default.less'
import SdvCmp from '@sdv/components';

const app = createApp(App)
app.use(SdvCmp)
app.mount('#app')
