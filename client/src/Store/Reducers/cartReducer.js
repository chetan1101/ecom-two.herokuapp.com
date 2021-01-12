import * as actionTypes from '../Constants/cartConstants';

const initalState = {
    cartItems: []
}

export const cartReducer = (state, action) => {
    state = state || initalState;
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload;
            const existItem = state.cartItems.find(x => x._id === item._id);
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x._id === existItem._id ? item : x)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case actionTypes.CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x._id !== action.payload),
            }
        case actionTypes.SAVE_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload
            }
        case actionTypes.SAVE_PAYMENT_METHOD:
            return{
                ...state,
                paymentMethod: action.payload
            }
        default:
            return state;
    }
}