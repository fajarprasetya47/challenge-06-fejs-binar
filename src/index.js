import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import { globalStore, persistor } from './config/redux/store';
import { PersistGate } from 'redux-persist/integration/react'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './assets/styles/style.css';
import './assets/styles/style2.css';
import './assets/styles/styles.css';
import './assets/js/scripts'

const root = document.getElementById('root');

//ReactDOM.render(<App />, root);

//latest version of react
ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <Provider store={globalStore}>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
