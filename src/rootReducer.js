import { combineReducers } from 'redux';
import homeReducer from './Components/Home/controller/reducer';
import infoReducer from './Components/Home/controller/reducer';

export default combineReducers({
    homeReducer:homeReducer,
    infoReducer:infoReducer
});