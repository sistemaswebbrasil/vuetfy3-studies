import { createI18n } from 'vue-i18n';

export default createI18n({
  locale: 'en',
  messages: {
    en: {
      message: {
        hello: '%{msg} world',
      },
      albums: {
        id: 'ID',
        title: 'Title',
        artist: 'Artist',
        price: 'Price',
      },
    },
  },
});
