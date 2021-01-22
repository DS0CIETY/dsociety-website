import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import './index.css';
import { App } from './pages/App';

import messages_en from './locales/en.json';
import messages_ru from './locales/ru.json';

const messages = {
  en: messages_en,
  ru: messages_ru,
};

const language =
  (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage || 'en-US';

ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language.slice(0, 2)]}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </IntlProvider>,
  document.getElementById('root')
);
