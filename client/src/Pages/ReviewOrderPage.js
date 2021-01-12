import React from 'react';
import { OrderList } from 'primereact/orderlist';
import { Button } from 'primereact/button';
import { connect, useSelector } from 'react-redux';
import CheckoutSteps from '../Components/CheckoutSteps';

function ReviewOrderPage(props) {
    const cart = useSelector(state=>state.cart);
    const { cartItems, shippingAddress, paymentMethod  } = cart;
    console.log(props.data)
  
    // calculation
    const toPrice = (num) => Number(num.toFixed(2));  // 5.123 => "5.12" => 5.12

    cart.itemPrice = toPrice(
        cart.cartItems.reduce((a, c) => a + c.price * c.qty, 0)
    )

    cart.shippingPrice = cart.itemPrice > 2000 ? toPrice(0) : toPrice(50); 

    cart.taxPrice = toPrice(0.15 * cart.itemPrice);

    cart.totalPrice = cart.itemPrice + cart.shippingPrice + cart.taxPrice;


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
                </div>  
                <div className="product-list-detail">
                    <>
                        <p style={{fontSize:"14px", fontWeight:"bold"}}>Quantity: {item.qty}</p>

                    </>
                </div>

                <div className="product-list-action">
                    <h6 className="p-mb-2">&#8377; {item.qty * item.price}</h6>
                  

                </div>
            </div>
        );
    }


    return (
        <>
            <CheckoutSteps step1 step2 step3 step4 />
            <div className="container review_order_container p-mt-6">

                <div className="p-grid">
                    <div className="p-sm-9">
                        <div className="p-grid">
                            <div className="p-sm-12 p-mb-1">
                                <div className="p-shadow-2 p-p-3 address_style">
                                    <h4 className="p-mb-3">Shipping address</h4>
                                    <p>{shippingAddress.fullname}</p>
                                    <p>{shippingAddress.address}</p>
                                    <p>{shippingAddress.postalCode}</p>
                                    <p>{shippingAddress.country}</p>
                                </div>
                            </div>
                            <div className="p-sm-12 p-mb-2">
                                <div className="p-shadow-2 p-p-3 address_style">
                                    <h4 className="p-mb-3">Payment method</h4>
                                    <p><span class="product-badge status-outstock">{paymentMethod}</span></p>
                               
                                </div>
                            </div>
                        </div>
                        <div className="orderlist-cart">
                            <div className="p-shadow-2">
                                <OrderList value={cartItems} itemTemplate={itemTemplate}></OrderList>
                            </div>
                        </div>
                    </div>
                    <div className="p-sm-3">
                        <div className="p-shadow-2 cart_totals p-p-3">
                        <h4 className="p-mb-3">Order summary</h4>
                            <div className="p-d-flex p-jc-between p-mb-2">
                                <div>Items:</div>

                                <div>&#8377; {cart.itemPrice}</div>
                            </div>
                            <div className="p-d-flex p-jc-between p-mb-2">
                                <div>Shipping:</div>

                                <div>&#8377; {cart.shippingPrice}</div>
                            </div>
                            <div className="p-d-flex p-jc-between p-mb-2">
                                <div>Tax:</div>

                                <div>&#8377; {cart.taxPrice}</div>
                            </div>
                            <div style={{fontSize:"18px"}} className="p-d-flex p-jc-between p-my-2">
                                <div><strong>Order total:</strong></div>

                                <div><strong>&#8377; {cart.totalPrice}</strong></div>
                            </div>
                            <Button onClick={() => props.history.push("/signin?redirect=shipping")} label="Procced To Checkout" className="block p-mt-3" />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}


export default ReviewOrderPage;
