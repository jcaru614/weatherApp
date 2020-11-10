import { FETCH_WEATHER } from './constants';

interface actionA {
    type: "FETCH_WEATHER",
    payload: {
        weather: [
            {
                description: string
            }
        ],
        main: {
            temp: number
        }
        name: string
    }
}

// interface actionb {
//     type: "test",
//     payload: string
// }

let initialState = {
    temp: 0,
    name: '',
    description: ''
}
// type Actions = actionA | actionb

function weatherReducer(state = initialState, action: actionA) {
    console.log("reducer ", action)
    switch (action.type) {
        case FETCH_WEATHER:
            return Object.assign({}, state, {
                temp: action.payload.main.temp,
                name: action.payload.name,
                description: action.payload.weather[0].description
            })
        default:
            return state
    }
}

export default weatherReducer;

