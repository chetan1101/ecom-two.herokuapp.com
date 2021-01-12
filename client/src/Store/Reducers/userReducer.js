import * as actionTypes from '../Constants/userConstants';

// const initalState = {
//     userInfo: {},
//     loading: false,
//     error: ""
// }

export const signInReducer = (state = { userInfo: {} }, action) => {
    //  state = state || initalState;
    switch (action.type) {
        case actionTypes.GET_SIGNIN_REQUEST:
            return {
                loading: true
            }
        case actionTypes.GET_SIGNIN_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload
            }
        case actionTypes.GET_SIGNIN_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case actionTypes.GET_REGISTER_REQUEST:
            return {
                loading: true
            }
        case actionTypes.GET_REGISTER_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload
            }
        case actionTypes.GET_REGISTER_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case actionTypes.GET_SIGNOUT:
            return {}

        default:
            return state;
    }
}
