import { FETCH_WEATHER } from './constants';
import axios from 'axios';

const key = process.env.REACT_APP_API_KEY
console.log("key ", key)

export const fetchWeatherRequest = (city:string) => {
    console.log("action ", city)
    return (dispatch:any) => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
            .then(res => {
                console.log("res ", res.data)
                const response = res.data
                dispatch({
                    type: FETCH_WEATHER,
                    payload: response
                })
            })
    }
}