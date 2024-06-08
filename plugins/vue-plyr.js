// plugins/vue-plyr.js
import Vue from 'vue';
import VuePlyr from 'vue-plyr';

// Import styles for Plyr
import 'vue-plyr/dist/vue-plyr.css';

Vue.use(VuePlyr, {
  plyr: {
    // You can add plyr options here
    // For example, to disable controls: controls: []
  },
});
