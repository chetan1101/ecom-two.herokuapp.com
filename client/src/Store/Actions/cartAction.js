import axios from "axios";
import * as actionTypes from '../Constants/cartConstants';

export const addToCart = (productId, qty) => async (dispatch, getState) => {
    const {data} = await axios.get(`/api/products/${productId}`);
    dispatch({type:actionTypes.ADD_TO_CART, payload:{
        _id:data._id,
        name:data.name,
        category: data.category,
        image:data.image,
        price:data.price,
        countInStock: data.countInStock,
        brand:data.brand,
        ratting:data.ratting,
        numReviews:data.numReviews,
        qty
    }});
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}

export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({type:actionTypes.CART_REMOVE_ITEM, payload: productId});
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({type:actionTypes.SAVE_SHIPPING_ADDRESS, payload: data})
    localStorage.setItem("shippingAddress", JSON.stringify(data))
}

export const savepaymentMethod = (data) => (dispatch) => {
    dispatch({type:actionTypes.SAVE_PAYMENT_METHOD, payload: data})
    localStorage.setItem("paymentMethod", JSON.stringify(data))
}