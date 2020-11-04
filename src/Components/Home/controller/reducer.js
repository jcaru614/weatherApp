import { FETCH_WEATHER  } from './constants';

let initialState = {
    weather: []
}
const weatherReducer = (state = initialState, action) => {
    console.log("reducer ", action)
    switch (action.type) {
        case FETCH_WEATHER:
            return Object.assign({}, state, {
                weather: action.payload
            })
        default:
            return state
    }
}

export default weatherReducer;

