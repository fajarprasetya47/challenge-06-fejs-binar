import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import { globalStore, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'

import './assets/styles/style.css';
import 'bootstrap/dist/css/bootstrap.css';

const root = document.getElementById('root');

//ReactDOM.render(<App />, root);

//latest version of react
ReactDOM.createRoot(root).render(
    <Provider store={globalStore}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
