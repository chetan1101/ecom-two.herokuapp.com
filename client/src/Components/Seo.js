import React from 'react';
import {Helmet} from 'react-helmet';

function Seo({title, description}) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="icon" href="/images/fc.png" />
            <link rel="apple-touch-icon" href="/images/fc.png" />
        </Helmet>
    )
}

export default Seo;
