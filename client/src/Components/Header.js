import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from 'react-redux';
import { SplitButton } from 'primereact/splitbutton';
import { getSignout } from '../Store/Actions/userAction';


function Header() {
    const cart = useSelector(state => state.cart);
    const user = useSelector(state => state.signIn);
    const history = useHistory();
    const dispatch = useDispatch();

    const userItems = [
        {
            label: 'Profile',
            icon: 'pi pi-user-edit',
            command: null
        },
        {
            label: 'Log out',
            icon: 'pi pi-power-off',
            command: ()=>dispatch(getSignout())
        },
 
    ];
    return (
        <header>
            <div className="header p-d-flex p-jc-between p-ai-center">
                <div>
                    <i className="pi pi-bars"></i>
                    <Link to="/"><span className="logo">ecom</span></Link>
                </div>
                <div className="headerLinks">
                    <Link to="/">Men</Link>
                    <Link to="/">Women</Link>
                    <Link to="/">Kids</Link>
                </div>
                <div className="headerButtons">
                    <Button icon="pi pi-search" />



                    {user.userInfo ? <>

                        <Button onClick={() => history.push('/cart')} type="button" icon="pi pi-shopping-cart" className="p-button" badge=

                            {cart.cartItems.length > 0 ? `${cart.cartItems.length}` : ``}

                            badgeClassName="p-badge-danger" />

                        <SplitButton label={user.userInfo.name} icon="pi pi-user" model={userItems}></SplitButton>
                    </>
                        :

                        <Button icon="pi pi-user" onClick={()=>history.push('/signin')} />
                    }


                </div>
            </div>
        </header>
    )
}

export default Header;
