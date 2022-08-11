import { createApp } from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { icons } from './icons';
import App from './App.vue';

icons.forEach((icon) => library.add(icon));

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
