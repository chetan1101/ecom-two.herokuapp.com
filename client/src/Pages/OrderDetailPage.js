


import React, { useEffect } from 'react';
import { OrderList } from 'primereact/orderlist';
import { Button } from 'primereact/button';
import CheckoutSteps from '../Components/CheckoutSteps';
import { getOrderDetail } from '../Store/Actions/orderAction';
import { connect } from 'react-redux';

function OrderDetailPage(props) {
    const orderId = props.match.params.id;
    const { loading, error, order } = props.orderData;
    console.log(order)



    useEffect(() => {
        props.getOrderDetail(orderId)
    }, [orderId])

    const paymentOrderHandler = () => {
        //
    }

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
                        <p style={{ fontSize: "14px", fontWeight: "bold" }}>Quantity: {item.qty}</p>

                    </>
                </div>

                <div className="product-list-action">
                    <h6 className="p-mb-2">&#8377; {item.qty * item.price}</h6>


                </div>
            </div>
        );
    }


    return (loading ? <div>Loading...</div> : error ? <div>{error}</div> :
        <>

            <div className="container review_order_container p-mt-6">
                <h4 className="p-mb-4">Order number: {orderId}</h4>

                <div className="p-grid">
                    <div className="p-sm-8 p-col-12">
                        <div className="p-grid">
                            <div className="p-sm-12 p-col-12 p-mb-1">
                                <div className="p-shadow-2 p-p-3 address_style">
                                    <h4 className="p-mb-3">Shipping address</h4>
                                    <p>{order.shippingAddress.fullname}</p>
                                    <p>{order.shippingAddress.address}</p>
                                    <p>{order.shippingAddress.postalCode}</p>
                                    <p>{order.shippingAddress.country}</p>
                                    {order.isDelivered ?
                                        <p className="p-mt-3"><strong>Delivery status: </strong><span class="product-badge status-instock">Delivered.</span></p>
                                        :
                                        <p className="p-mt-3"><strong>Delivery status: </strong><span class="product-badge status-outstock">Not dispatched</span></p>
                                    }
                                </div>
                            </div>
                            <div className="p-sm-12 p-col-12 p-mb-2">
                                <div className="p-shadow-2 p-p-3 address_style">
                                    <h4 className="p-mb-3">Payment method: {order.paymentMethod} </h4>
                                    {order.isPaid ?
                                        <p><strong>Payment status: </strong><span class="product-badge status-instock">Payment confirm.</span></p>
                                        :
                                        <p><strong>Payment status: </strong><span class="product-badge status-outstock">Not paid</span></p>
                                    }


                                </div>
                            </div>
                        </div>
                        <div className="orderlist-cart">
                            <div className="p-shadow-2">
                                <OrderList value={order.orderItems} itemTemplate={itemTemplate}></OrderList>
                            </div>
                        </div>
                    </div>
                    <div className="p-sm-4 p-col-12">
                        <div className="p-shadow-2 cart_totals p-p-3">
                            <h4 className="p-mb-3">Order summary</h4>
                            <div className="p-d-flex p-jc-between p-mb-2">
                                <div>Items:</div>

                                <div>&#8377; {order.itemPrice}</div>
                            </div>
                            <div className="p-d-flex p-jc-between p-mb-2">
                                <div>Shipping:</div>

                                <div>&#8377; {order.shippingPrice}</div>
                            </div>
                            <div className="p-d-flex p-jc-between p-mb-2">
                                <div>Tax:</div>

                                <div>&#8377; {order.taxPrice}</div>
                            </div>
                            <div style={{ fontSize: "18px" }} className="p-d-flex p-jc-between p-my-2">
                                <div><strong>Order total:</strong></div>

                                <div><strong>&#8377; {order.totalPrice}</strong></div>
                            </div>
                            <Button onClick={paymentOrderHandler} label="Place order" className="block p-mt-3" />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapState = (state) => ({
    orderData: state.orderDetails
})

const mapDispatch = {
    getOrderDetail
}


export default connect(mapState, mapDispatch)(OrderDetailPage);

