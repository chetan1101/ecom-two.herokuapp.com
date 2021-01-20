import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Seo from '../Components/Seo';
import { getSignIn } from '../Store/Actions/userAction';

function SignInPage(props) {
    const { register, handleSubmit } = useForm();
    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
    const {userInfo, error} = props.data;

    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, userInfo])

    const onSubmit = (data) => {
        props.getSignIn(data.email, data.password)
    };

    return (
        <div className="container p-shadow-2 p-p-6">
            <Seo title={`--Get signin--Ecom`} description={`--Get signin--Ecom`}/>
            <h1 className="p-mb-3">Sign In</h1>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="p-fluid">
                    <div className="p-field p-my-5">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input
                            id="email"
                            type="text"
                            className="p-inputtext p-component p-filled"
                            name="email"
                            ref={register({ required: true })}
                        />
                        

                    </div>
                    <div className="p-field p-my-5">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input
                            id="password"
                            type="password"
                            className="p-inputtext p-component p-filled"
                            name="password"
                            ref={register({ required: true })}
                        />
                        
                    </div>

                </div>
                <button type="submit" className="p-button p-component">
                    <span className="p-button-label p-c">Submit</span>
                </button>
                <span style={{position:"relative", bottom:"8px", padding:"8px"}}>New customer? Click <Link to={redirect === "/" ? "register" : "register?redirect=" + redirect}>here</Link></span>
            </form>
        </div>

    )
}

const mapState = (state) => ({
    data: state.signIn
})

const mapDispatch = {
    getSignIn
}

export default connect(mapState, mapDispatch)(SignInPage);
