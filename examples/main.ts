import { createApp } from 'vue'
import App from './App.vue'

// import IsButton from '@sdv/components/button';
import '@idux/components/default.min.css'
import '@idux/pro/default.min.css'
import '@ixsu/components/default.less'
import IxsComponents from '@ixsu/components'

const app = createApp(App)
app.use(IxsComponents)
app.mount('#app')
