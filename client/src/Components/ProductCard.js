import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { Link, useHistory } from 'react-router-dom';

function ProductCard({item}) {
    const history = useHistory();

    const header = (
       <Link to={`/view-item/${item.name}/${item._id}`}><img alt={item.name} src={item.image} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} /></Link> 
    );
    const footer = (
        <span>
            <Button label="View Item" onClick={()=>history.push(`/view-item/${item.name}/${item._id}`)} />
            <Button label="Quick View" className="p-button-secondary p-ml-2" />
        </span>
    );

    return (
        <Card title={<Link to={`/view-item/${item.name}/${item._id}`}>{item.name}</Link>} subTitle={<Rating value={3.5} readonly stars={5} cancel={false} />} className="ui-card-shadow" footer={footer} header={header}>
        </Card>
    )
}

export default ProductCard;
