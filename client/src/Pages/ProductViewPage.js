import React, { useEffect, useState } from 'react';
import { Rating } from 'primereact/rating';
import { ProgressBar } from 'primereact/progressbar';
import { Button } from 'primereact/button';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProductDetail } from '../Store/Actions/productAction';
import PagePathStrip from '../Components/PagePathStrip';
import Seo from '../Components/Seo';

function ProductViewPage(props) {
    const history = useHistory();
    const productId = props.match.params.id;
    const [qty, setQty] = useState(1)
    const { product, loading, error } = props.data;

    console.log(product)


    useEffect(() => {
        props.getProductDetail(productId);
    }, [productId])

    return (loading ? <div>Loading...</div> : error ? <div>{error}</div> :
        <div className="container">
             <Seo title={`Ecom-${product.name}`} description={`${product.description}`} />
            <div className="ProductViewPage">
                <PagePathStrip />
                <div className="product_detail_cont">
                    <div className="p-grid">
                        <div className="p-lg-3 p-md-4 p-sm-12 p-col-12 p-col-12">
                            <div className="p-shadow-2 img_main_cont">
                                <div>
                                    <img className="product_img" src={product.image} alt={product.name} />
                                </div>
                            </div>
                            <div className="p-d-flex p-jc-center img_thub_cont">
                                <div className="p-shadow-1">
                                    <img width="50" src={product.image} alt={product.name} />
                                </div>
                                <div className="p-shadow-1">
                                    <img width="50" src={product.image} alt={product.name} />
                                </div>
                                <div className="p-shadow-1">
                                    <img width="50" src={product.image} alt={product.name} />
                                </div>
                            </div>
                        </div>
                        <div className="p-lg-6 p-md-8 p-sm-12 p-col-12 p-col-12">
                            <div className="p-shadow-2 product_detail">
                                <h1>{product.name}</h1>
                                <Link className="storelink" to="">Store name</Link>
                                <Rating value={4.5} readonly stars={5} cancel={false} />
                                <span className="reviews">Rattings: {product.ratting} out of 5</span> <br />
                                <span className="reviews">Reviews: {product.numReviews}</span> <br />
                                <span className="reviews">Quantity Avilable: {product.countInStock}</span>
                                <hr />
                                <h4>&#8377; {product.price}</h4>
                                {product.countInStock > 1 &&
                                    <>
                                        <p>Quantity</p>
                                        <div className="select p-mb-3">

                                            <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                                {
                                                    [...Array(product.countInStock).keys()].map(x =>
                                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                    )
                                                }
                                            </select>
                                        </div>
                                    </>

                                }

                                {product.countInStock > 0 &&
                                    <div>
                                        <Button onClick={() => history.push(`/cart/${productId}?qty=${qty}`)} label="Add to cart" icon="pi pi-shopping-cart" />
                                    </div>

                                }

                                {product.countInStock > 0 ?

                                    <div>
                                        <Button label="Add to watchlist" icon="pi pi-bookmark" className="p-button-warning p-mt-3" />
                                    </div>

                                    :

                                    <div>
                                        <span class="product-badge status-outstock">SOLD OUT</span> <br />
                                        <Button label="Notify Me" icon="pi pi-bookmark" className="p-button-warning p-mt-3" />
                                    </div>
                                }


                            </div>
                        </div>
                        <div className="p-lg-3 p-md-12 p-sm-12 p-col-12">
                            <div className="p-shadow-2 seller_info_box">
                                <h5>Seller Information</h5>
                                <p>Store: abc store</p>
                                <Rating value={4.5} readonly stars={5} cancel={false} />
                                <span className="reviews">Rattings: {product.ratting} out of 5</span> <br />
                                <span className="reviews">Reviews: {product.numReviews}</span>
                                <hr />
                                <div className="ratting_box">
                                    <div className="ratting_item">
                                        <div>
                                            <span>5 star</span>
                                        </div>
                                        <div>
                                            <ProgressBar value={80} />
                                        </div>
                                    </div>
                                    <div className="ratting_item">
                                        <div>
                                            <span>4 star</span>
                                        </div>
                                        <div>
                                            <ProgressBar value={68} />
                                        </div>
                                    </div>
                                    <div className="ratting_item">
                                        <div>
                                            <span>3 star</span>
                                        </div>
                                        <div>
                                            <ProgressBar value={20} />
                                        </div>
                                    </div>
                                    <div className="ratting_item">
                                        <div>
                                            <span>2 star</span>
                                        </div>
                                        <div>
                                            <ProgressBar value={10} />
                                        </div>
                                    </div>
                                    <div className="ratting_item">
                                        <div>
                                            <span>1 star</span>
                                        </div>
                                        <div>
                                            <ProgressBar value={40} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )


}
const mapState = (state) => ({
    data: state.productDetail
})

const mapDispatch = {
    getProductDetail
}

export default connect(mapState, mapDispatch)(ProductViewPage);

