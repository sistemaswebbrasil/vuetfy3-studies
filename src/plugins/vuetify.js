// eslint-disable-next-line import/extensions
import 'vuetify/styles';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader

// eslint-disable-next-line no-unused-vars
import * as components from 'vuetify/components';
// eslint-disable-next-line no-unused-vars
import * as directives from 'vuetify/directives';

import { createVuetify } from 'vuetify';

export default createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
        },
      },
    },
  },
});
