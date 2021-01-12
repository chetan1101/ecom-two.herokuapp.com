import axios from 'axios';
import * as actionTypes from '../Constants/userConstants';


export const getSignIn = (email, password) => async (dispatch) => {
    dispatch({ type: actionTypes.GET_SIGNIN_REQUEST, payload: { email, password } });
    try {
        const { data } = await axios.post('/api/users/signin', { email, password });
        dispatch({ type: actionTypes.GET_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: actionTypes.GET_SIGNIN_FAIL,
            payload: error.response && error.response.data.massage ? error.response.data.massage : error.massage
        });
    }
}
export const getSignout = () => (dispatch) => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
    
    dispatch({ type: actionTypes.GET_SIGNOUT })
}


export const getRegister = (name, email, password) => async (dispatch) => {
    dispatch({ type: actionTypes.GET_REGISTER_REQUEST, payload: { name, email, password } });
    try {
        const { data } = await axios.post('/api/users/register', { name, email, password });
        dispatch({ type: actionTypes.GET_REGISTER_SUCCESS, payload: data });
        dispatch({ type: actionTypes.GET_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: actionTypes.GET_REGISTER_FAIL,
            payload: error.response && error.response.data.massage ? error.response.data.massage : error.massage
        });
    }
}