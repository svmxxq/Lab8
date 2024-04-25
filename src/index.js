import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './store/store';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';  //сайтты активировать ету ушн астндагы  регистр костм

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorkerRegistration.register();
