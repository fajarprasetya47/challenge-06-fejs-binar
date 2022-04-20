import {combineReducers} from 'redux';
import carsReducer from './carsReducer';
import detailReducer from './detailReducer';
import buttonReducer from './buttonReducer';

const rootReducer = combineReducers({
    carsReducer,
    detailReducer,
    buttonReducer
})

export default rootReducer