import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./Reducers/cartReducer";
import { createOrderReducer, orderDetailsReducer } from "./Reducers/orderReducer";
import { productDetailReducer, productListReducer } from "./Reducers/productReducer";
import { signInReducer } from "./Reducers/userReducer";

const initalState = {
    cart: {
        cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
        shippingAddress: localStorage.getItem("shippingAddress") ? JSON.parse(localStorage.getItem("shippingAddress")) : {},
        paymentMethod: localStorage.getItem("paymentMethod") ? JSON.parse(localStorage.getItem("paymentMethod")) : {}
    },
    // productDetail: {
    //     recentItems: localStorage.getItem("recentItems") ? JSON.parse(localStorage.getItem("recentItems")) : [],
    // },
    signIn: {
        userInfo: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null,
    },

};

const rootReducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
    signIn: signInReducer,
    createOrder: createOrderReducer,
    orderDetails: orderDetailsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, initalState, composeEnhancers(applyMiddleware(thunk)));

export default store;