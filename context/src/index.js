import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthProvider from './store/authProvider';
import store from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}><AuthProvider><App /></AuthProvider></Provider>
);
