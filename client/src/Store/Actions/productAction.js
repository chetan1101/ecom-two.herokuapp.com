import axios from "axios";
import * as actionTypes from "../Constants/productConstants";

export const getProductList = () => async (dispatch) => {
    dispatch({ type: actionTypes.GET_PRODUCTLIST_REQUEST });
    try {
        const { data } = await axios.get('/api/products');
        dispatch({ type: actionTypes.GET_PRODUCTLIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCTLIST_FAIL,
            payload: error.response && error.response.data.massage ? error.response.data.massage : error.massage
        });
    }
}

export const getProductDetail = (productId) => async (dispatch, getState) => {
    dispatch({ type: actionTypes.GET_PRODUCTDETAIL_REQUEST });
    try {
        const { data } = await axios.get('/api/products/' + productId);
        dispatch({ type: actionTypes.GET_PRODUCTDETAIL_SUCCESS, payload: data });
         //localStorage.setItem("recentItems", JSON.stringify(getState().productDetail.recentItems));
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCTDETAIL_FAIL,
            payload: error.response && error.response.data.massage ? error.response.data.massage : error.massage
        });
    }
}
