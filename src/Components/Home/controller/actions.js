import { FETCH_WEATHER } from './constants';
import axios from 'axios';

const key = '';

export const fetchWeatherRequest = (weather) => {
    console.log("action ", weather)
    return dispatch => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=${key}`)
            .then(res => {
                console.log("res ", res)
                const response = res.data
                dispatch({
                    type: FETCH_WEATHER,
                    payload: response
                })
            })
    }
}