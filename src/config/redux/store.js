import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import autoMergeLevel1 from "redux-persist/es/stateReconciler/autoMergeLevel1";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'ch6',
    storage,
    stateReconciler: autoMergeLevel1
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const globalStore = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

const persistor = persistStore(globalStore);

export {globalStore, persistor};