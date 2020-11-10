import { FETCH_WEATHER  } from './constants';

interface actionA {
    type: "FETCH_WEATHER",
    payload: {}
}

// interface actionb {
//     type: "test",
//     payload: string
// }

let initialState = {
    weather: {}
}
// type Actions = actionA | actionb

function weatherReducer(state = initialState, action:actionA) {
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

