import * as actionTypes from '../Constants/orderConstants';

export const createOrderReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.ORDER_CREATE_REQUEST:
            return {
                loading: true
            }
        case actionTypes.ORDER_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                order: action.payload
            }
        case actionTypes.ORDER_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case actionTypes.ORDER_RESET:
            return {}
        default:
            return state;
    }
}

export const orderDetailsReducer = (state = { loading: true, order: {} }, action) => {
    switch (action.type) {
        case actionTypes.ORDER_DETAIL_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.ORDER_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                order: action.payload
            }
        case actionTypes.ORDER_DETAIL_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}