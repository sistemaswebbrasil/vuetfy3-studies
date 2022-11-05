// eslint-disable-next-line import/extensions
import 'vuetify/styles';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import { en } from 'vuetify/locale';

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
  locale: {
    locale: 'en',
    fallback: 'en',
    messages: { en },
  },
});
