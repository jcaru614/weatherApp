import { SET_HOME_REQUEST } from './constants'

export const setHomeRequest = (number) => {
    console.log("action ", number)
    return {
        type: SET_HOME_REQUEST,
        payload: number
    }
}