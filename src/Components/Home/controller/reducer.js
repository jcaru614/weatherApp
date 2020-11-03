import { SET_HOME_REQUEST  } from './constants';

let initialState = {
    number: 0
}
const numberReducer = (state = initialState, action) => {
    console.log("reducer ", action)
    switch (action.type) {
        case SET_HOME_REQUEST:
            return Object.assign({}, state, {
                number: action.payload
            })
        default:
            return state
    }
}

export default numberReducer;

