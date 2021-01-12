import React, { useState } from 'react';
import CheckoutSteps from '../Components/CheckoutSteps';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { savepaymentMethod } from '../Store/Actions/cartAction';
import { SelectButton } from 'primereact/selectbutton';

function PaymentPage(props) {
    const { userInfo } = props.signinData;
    const {shippingAddress} = props.cartData;
    if (!userInfo) {
        props.history.push("/signin");
    }
    if(!shippingAddress){
        alert("please provide shipping address")
        props.history.push('/shipping')
    }
    const options = ['Paypal', 'Strip'];

    const [paymentMethod, setPaymentMethod] = useState('Payapl')


    const handlePaymetSubmit = (e) => {
        e.preventDefault()
        console.log(paymentMethod)
        props.savepaymentMethod(paymentMethod)
        props.history.push('/review-order')
    };

    return (
        <>
            <CheckoutSteps step1 step2 step3 />
            <div className="container" style={{ marginTop: "40px" }}>
                <div className="container p-shadow-2 p-p-6">
                    <h1 className="p-mb-3">Shipping</h1>

                    <form onSubmit={(e) => handlePaymetSubmit(e)} className="p-mt-5">

                        <div className="p-field p-my-5">

                            <label htmlFor="fullname"><strong>Select Payment method</strong></label>
                            <SelectButton value={paymentMethod} options={options} onChange={(e) => setPaymentMethod(e.value)} />

                            <p style={{ fontSize: "14px", margin: "20px 0", fontWeight: "bold" }}>You are continue with <span class="product-badge status-outstock">{paymentMethod}</span></p>

                        </div>

                        <button type="submit" className="p-button p-component">
                            <span className="p-button-label p-c">Continue</span>
                        </button>
                        <span style={{ position: "relative", bottom: "8px", padding: "8px" }}> <Link to="/shipping">Back</Link></span>

                    </form>
                </div>
            </div>
        </>
    )
}

const mapState = (state) => ({
    signinData: state.signIn,
    cartData: state.cart
})

const mapDispatch = {
    savepaymentMethod
}
export default connect(mapState, mapDispatch)(PaymentPage);
