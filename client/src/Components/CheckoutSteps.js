import React from 'react';
import { Link } from 'react-router-dom';


function CheckoutSteps({step1, step2, step3, step4}) {

    return (
        <div className="checkoutSteps">
            <div className="p-steps p-component">
                <ul>
                    
                    <li className={`${step1 && "p-highlight"} p-steps-item`}><Link to="#" className="p-menuitem-link"><span className="p-steps-number">Sign In</span></Link></li>

                    <li className={`${step2 && "p-highlight"} p-steps-item`}><Link to="#" className="p-menuitem-link"><span className="p-steps-number">Shipping</span></Link></li>

                    <li className={`${step3 && "p-highlight"} p-steps-item`}><Link to="#" className="p-menuitem-link"><span className="p-steps-number">Payment</span></Link></li>

                    <li className={`${step4 && "p-highlight"} p-steps-item`}><Link to="#" className="p-menuitem-link"><span className="p-steps-number">Review Order</span></Link></li>

                </ul>
            </div>
        </div>

    )
}

export default CheckoutSteps;
