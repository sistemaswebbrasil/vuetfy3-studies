// eslint-disable-next-line import/extensions
import 'vuetify/styles';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader

// eslint-disable-next-line no-unused-vars
import * as components from 'vuetify/components';
// eslint-disable-next-line no-unused-vars
import * as directives from 'vuetify/directives';

import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

export default createVuetify({
  components,
  directives,

  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});
