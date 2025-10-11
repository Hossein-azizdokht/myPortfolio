// next-i18next.config.js
const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'fa',
    locales: ['fa', 'en'],
  },
  localePath: typeof window === 'undefined' 
    ? path.resolve('./public/locales') 
    : '/public/locales', // مرورگر فقط مسیر نسبی میفهمه
};
