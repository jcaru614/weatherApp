import { FETCH_WEATHER, FETCH_WEATHER_COOR } from './constants';

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

interface actionB {
    type: "FETCH_WEATHER_COOR",
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

let initialState = {
    temp: 0,
    name: '',
    description: '',
}
type Actions = actionA | actionB

function weatherReducer(state = initialState, action: Actions) {
    switch (action.type) {
        case FETCH_WEATHER:
            return Object.assign({}, state, {
                temp: action.payload.main.temp,
                name: action.payload.name,
                description: action.payload.weather[0].description
            })
        case FETCH_WEATHER_COOR:
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

