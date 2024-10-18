import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import contactUsReducer from './Request';
import ContactUsPage from './components/Contact';
import './index.css';

const store = configureStore({
  reducer: {
    contactUs: contactUsReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ContactUsPage />
    </Provider>
  </React.StrictMode>
);