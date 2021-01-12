import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSignIn, getRegister } from '../Store/Actions/userAction';

function RegisterPage(props) {
    const { register, handleSubmit } = useForm();
    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
    const { userInfo, error } = props.data;

    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
    }, [userInfo])

    const onSubmit = (data) => {
        if (data.password !== data.Confirmpassword) {
            alert("Confirm passowrd not matched")
        } else {
            props.getRegister(data.name, data.email, data.password);
        }
    };

    return (
        <div className="container p-shadow-2 p-p-6">
            <h1 className="p-mb-3">Register</h1>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="p-fluid">

                    <div className="p-field p-my-5">

                        <label htmlFor="name"><strong>Name</strong></label>
                        <input
                            id="name"
                            type="text"
                            className="p-inputtext p-component p-filled"
                            name="name"
                            ref={register({ required: true })}
                        />
                        
                    </div>

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

                    <div className="p-field p-my-5">
                        <label htmlFor="password"><strong>Confirm password</strong></label>
                        <input
                            id="Confirmpassword"
                            type="password"
                            className="p-inputtext p-component p-filled"
                            name="Confirmpassword"
                            ref={register({ required: true })}
                        />
                    </div>

                </div>
                <button type="submit" className="p-button p-component">
                    <span className="p-button-label p-c">Submit</span>
                </button>
                <span style={{ position: "relative", bottom: "8px", padding: "8px" }}>Already have and account? Click <Link to={redirect === "/" ? "signin" : "signin?redirect=" + redirect}>here</Link></span>
            </form>
        </div>

    )
}

const mapState = (state) => ({
    data: state.signIn
})

const mapDispatch = {
    getSignIn,
    getRegister
}

export default connect(mapState, mapDispatch)(RegisterPage);
