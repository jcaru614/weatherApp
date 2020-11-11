import { FETCH_WEATHER, FETCH_WEATHER_COOR } from './constants';
import axios from 'axios';

const key = process.env.REACT_APP_API_KEY

export const fetchWeatherRequest = (city: string) => {
    return (dispatch: any) => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
            .then(res => {
                const response = res.data;
                dispatch({
                    type: FETCH_WEATHER,
                    payload: response
                })
            })
    }
}

export const fetchWeatherCoor = (latitude: number, longitude: number) => {
    return (dispatch: any) => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`)
            .then(res => {
                const response = res.data;
                dispatch({
                    type: FETCH_WEATHER_COOR,
                    payload: response
                })
            })
    }
}