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

interface actionb {
    type: "FETCH_WEATHER_COOR",
    payload: any
}

let initialState = {
    temp: 0,
    name: '',
    description: '',
    latitude: 0,
    longitude: 0
}
type Actions = actionA | actionb

function weatherReducer(state = initialState, action: Actions) {
    console.log("reducer ", action)
    switch (action.type) {
        case FETCH_WEATHER:
            return Object.assign({}, state, {
                temp: action.payload.main.temp,
                name: action.payload.name,
                description: action.payload.weather[0].description
            })
        case FETCH_WEATHER_COOR:
            return Object.assign({}, state, {
                latitude: action.payload.latitude,
                longitude: action.payload.longitude
            })
        default:
            return state
    }
}

export default weatherReducer;

