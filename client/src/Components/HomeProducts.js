import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ProductCard from './ProductCard';
import {getProductList} from '../Store/Actions/productAction';


function HomeProducts(props) {
    const {products, error, loading} = props.data;

    useEffect(()=>{
        props.getProductList();
    },[])
 
    return ( loading ? <div>Loding...</div> : error ? <div>{error}</div> :
        <div className="container">
            <div className="p-grid">
                {products.map((item)=>
                
                <div className="p-col-12 p-md-6 p-lg-4 ">
                    <ProductCard item={item}/>
                </div>
                
                )}
                
            </div>
        </div>
    )
}

const mapState = (state)=>({
    data: state.productList
})

const mapDispatch = {
    getProductList
}
export default connect(mapState, mapDispatch)(HomeProducts);
