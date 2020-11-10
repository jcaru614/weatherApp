import { combineReducers } from 'redux';
import homeReducer from './Components/controller/reducer';
import infoReducer from './Components/controller/reducer';

export default combineReducers({
    homeReducer:homeReducer,
    infoReducer:infoReducer
});