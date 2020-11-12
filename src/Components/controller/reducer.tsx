import { FETCH_WEATHER, FETCH_WEATHER_COOR, FETCH_FIVEDAY_WEATHER } from './constants';

interface actionA {
    type: "FETCH_WEATHER",
    payload: {
        weather: [{ description: string }],
        main: { temp: number }
        name: string
    }
}

interface actionB {
    type: "FETCH_WEATHER_COOR",
    payload: {
        weather: [{ description: string }],
        main: { temp: number }
        name: string
    }
}

interface actionC {
    type: "FETCH_FIVEDAY_WEATHER",
    payload: any
}

let initialState = {
    temp: 0,
    name: '',
    description: '',
    list: []
}
type Actions = actionA | actionB | actionC

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
        case FETCH_FIVEDAY_WEATHER:
            return Object.assign({}, state, {
                list: action.payload.list
            })
        default:
            return state
    }
}

export default weatherReducer;

