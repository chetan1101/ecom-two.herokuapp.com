import axios from 'axios';
import { CART_EMPTY } from '../Constants/cartConstants';
import * as actionTypes from '../Constants/orderConstants';


export const createNewOrder = (order) => async (dispatch, getState) => {
    dispatch({ type: actionTypes.ORDER_CREATE_REQUEST, payload: order });
    try {
        const { signIn: { userInfo } } = getState();
        const { data } = await axios.post('/api/orders', order, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        });
        dispatch({ type: actionTypes.ORDER_CREATE_SUCCESS, payload: data.order });
        dispatch({ type: CART_EMPTY })
    } catch (error) {
        dispatch({
            type: actionTypes.ORDER_CREATE_FAIL, payload:
                error.response && error.response.data.massage ? error.response.data.massage : error.massage
        })
    }
}

export const getOrderDetail = (orderId) => async (dispatch, getState) => {
    dispatch({type:actionTypes.ORDER_DETAIL_REQUEST, payload: orderId});
    try {
        const { signIn: { userInfo } } = getState();
        const { data } = await axios.get(`/api/orders/${orderId}`, {
            headers:{
                Authorization: `Bearer ${userInfo.token}`
            }
        });
        dispatch({type:actionTypes.ORDER_DETAIL_SUCCESS, payload: data});
    } catch (error) {
        dispatch({
            type: actionTypes.ORDER_DETAIL_FAIL, payload:
                error.response && error.response.data.massage ? error.response.data.massage : error.massage
        })
    }
}