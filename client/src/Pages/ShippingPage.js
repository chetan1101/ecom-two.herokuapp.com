import React, { useState } from 'react';
import CheckoutSteps from '../Components/CheckoutSteps';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveShippingAddress } from '../Store/Actions/cartAction';
import Seo from '../Components/Seo';

function ShippingPage(props) {


    const { userInfo } = props.signinData;
    const { shippingAddress } = props.cartData;
    if (!userInfo) {
        props.history.push("/signin");
    }
    const { register, handleSubmit } = useForm();

    const [fullName, setFullName] = useState(shippingAddress.fullname)
    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const onSubmit = (data) => {
        props.saveShippingAddress(data);
        props.history.push('/payment')
    };

    return (
        <>
        <Seo title={`--Add shipping details--Ecom`} description={`--Add shipping details--Ecom`}/>
            <CheckoutSteps step1 step2 />
            <div className="container" style={{ marginTop: "40px" }}>
                <div className="container p-shadow-2 p-p-6">
                    <h1 className="p-mb-3">Shipping</h1>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="p-fluid">

                            <div className="p-field p-my-5">

                                <label htmlFor="fullname"><strong>Full Name</strong></label>
                                <input
                                    id="fullname"
                                    type="text"
                                    className="p-inputtext p-component p-filled"
                                    name="fullname"
                                    ref={register({ required: true })}
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                />

                            </div>

                            <div className="p-field p-my-5">

                                <label htmlFor="address"><strong>Address</strong></label>
                                <input
                                    id="address"
                                    type="text"
                                    className="p-inputtext p-component p-filled"
                                    name="address"
                                    ref={register({ required: true })}
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>


                            <div className="p-field p-my-5">
                                <label htmlFor="city"><strong>City</strong></label>
                                <input
                                    id="city"
                                    type="text"
                                    className="p-inputtext p-component p-filled"
                                    name="city"
                                    ref={register({ required: true })}
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>

                            <div className="p-field p-my-5">
                                <label htmlFor="pin"><strong>Postal code</strong></label>
                                <input
                                    id="postalCode"
                                    type="text"
                                    className="p-inputtext p-component p-filled"
                                    name="postalCode"
                                    ref={register({ required: true })}
                                    value={postalCode}
                                    onChange={(e) => setPostalCode(e.target.value)}
                                />
                            </div>

                            <div className="p-field p-my-5">
                                <label htmlFor="country"><strong>Country</strong></label>
                                <input
                                    id="country"
                                    type="text"
                                    className="p-inputtext p-component p-filled"
                                    name="country"
                                    ref={register({ required: true })}
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                />
                            </div>
                        </div>

                        <button type="submit" className="p-button p-component">
                            <span className="p-button-label p-c">Continue</span>
                        </button>
                        <span style={{ position: "relative", bottom: "8px", padding: "8px" }}> <Link to="">Back</Link></span>

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
    saveShippingAddress
}
export default connect(mapState, mapDispatch)(ShippingPage);
