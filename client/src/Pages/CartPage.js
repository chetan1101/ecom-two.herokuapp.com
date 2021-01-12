import React, { useEffect } from 'react';
import PagePathStrip from '../Components/PagePathStrip';
import { OrderList } from 'primereact/orderlist';
import { Button } from 'primereact/button';
import { connect } from 'react-redux';
import { addToCart,removeFromCart } from '../Store/Actions/cartAction';
import { Link } from 'react-router-dom';

function CartPage(props) {
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const { cartItems } = props.data;
    console.log(props)

    useEffect(() => {
        if (productId) {
            props.addToCart(productId, qty)
        }
    }, [productId])


    const itemTemplate = (item) => {
        return (
            <div className="product-item">
                <div className="image-container">
                    <img src={`${item.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} />
                </div>
                <div className="product-list-detail">
                    <h5 className="p-mb-2">{item.name}</h5>
                    <i className="pi pi-tag product-category-icon"></i>
                    <span className="product-category">{item.category}</span>
                    <div className="delbtn">
                        <Button onClick={()=>props.removeFromCart(item._id)} label="Delete" className="p-button-link" />
                    </div>

                </div>
                <div className="product-list-detail">
                    <>
                        <p>Quantity</p>
                        <div className="select p-mt-2">

                            <select value={item.qty} onChange={(e) => props.addToCart(item._id, Number(e.target.value))}>
                                {
                                    [...Array(item.countInStock).keys()].map(x =>
                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                    )
                                }
                            </select>
                        </div>
                    </>
                </div>

                <div className="product-list-action">
                    <h6 className="p-mb-2">&#8377; {item.price}</h6>
                    {item.countInStock === 0 ?
                        <span class="product-badge status-outstock">SOLD OUT</span>
                        :
                        <span class="product-badge status-instock">IN STOCK</span>
                    }

                </div>
            </div>
        );
    }


    return (cartItems.length === 0 ?

        <div className="container">
            <div className="p-shadow-2 cart_emp_container">
                <img src="/images/emp_cart.png" alt="cart is empty" />
                <h1>Cart is empty.</h1>
                <p>Looks like you have no items in your shopping cart.
                <br />
                Click <Link to="/">here</Link> to continue shopping.
            </p>
            </div>

        </div>
        :
        <div className="container cart_container">
            <PagePathStrip />
            <div className="p-grid">
                <div className="p-sm-9">
                    <div className="orderlist-cart">
                        <div className="p-shadow-2">
                            <OrderList value={cartItems} itemTemplate={itemTemplate}></OrderList>
                        </div>
                    </div>
                </div>
                <div className="p-sm-3">
                    <div className="p-shadow-2 cart_totals p-p-3">
                        <div className="p-d-flex p-jc-between">
                            <div>Subtotal: (

                                {cartItems.reduce((existItem, currentItem) => existItem + currentItem.qty, 0)} items)</div>

                            <div>&#8377; {cartItems.reduce((existItem, currentItem) => existItem + currentItem.price * currentItem.qty, 0)}

                            </div>
                        </div>
                        <Button onClick={()=>props.history.push("/signin?redirect=shipping")} label="Procced To Checkout" className="block p-mt-3" />
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapState = (state) => ({
    data: state.cart
});

const mapDispatch = {
    addToCart,
    removeFromCart
}

export default connect(mapState, mapDispatch)(CartPage);
