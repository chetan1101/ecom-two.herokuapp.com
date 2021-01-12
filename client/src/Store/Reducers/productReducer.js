import * as actionTypes from '../Constants/productConstants';

const initalState = {
    products: [],
    product: {},
    recentItems: [],
    loading: false,
    error: ""
}

export const productListReducer = (state, action) => {
    state = state || initalState;

    switch (action.type) {
        case actionTypes.GET_PRODUCTLIST_REQUEST:
            return {
                loading: true,
            }
        case actionTypes.GET_PRODUCTLIST_SUCCESS:
            return {
                loading: false,
                products: action.payload,

            }
        case actionTypes.GET_PRODUCTLIST_FAIL:
            return {
                loading: false,
                products: action.payload
            }
        default:
            return state;
    }
}

export const productDetailReducer = (state, action) => {
    state = state || initalState;

    switch (action.type) {
        case actionTypes.GET_PRODUCTDETAIL_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_PRODUCTDETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.payload,
                recentItems: [...state.recentItems, action.payload],
            }
        case actionTypes.GET_PRODUCTDETAIL_FAIL:
            return {
                ...state,
                loading: false,
                product: action.payload
            }
        default:
            return state;
    }
}