import React from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';




function RecentViewSlider(props) {
 
    const recent = useSelector(state=>state.productDetail);
    const history = useHistory();
    const {loading, error, recentItems} = recent;
    console.log(recentItems)

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const recentProducts = (product) => {
        return ( loading ? <div>Loading</div> : error ? <div>{error}</div>  :
            <div className="product-item">
                <div className="product-item-content">
                    <div className="p-mb-3">
                        <img src={`${product.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={product.name} className="product-image" />
                    </div>
                    <div>
                        <h4 className="p-mb-1">{product.name}</h4>
                        <h6 className="p-mt-0 p-mb-3">${product.price}</h6>
                        <div className="car-buttons p-mt-5">
                            <Button label="View Item" icon="pi pi-arrow-circle-right" iconPos="right" onClick={()=>history.push(`/view-item/${product.name}/${product._id}`)} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
           <div className="p-shadow-2 prod_slider_head">Recently viewed items</div>
            <div className="productCarousel p-shadow-2">
                <div className="card">
                    <Carousel value={recentItems} numVisible={4} numScroll={4} responsiveOptions={responsiveOptions}
                      itemTemplate={recentProducts} />
                </div>
            </div>

        </div>

    )

}


export default RecentViewSlider;
