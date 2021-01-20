import React from 'react';
import { useSelector } from 'react-redux';
import HomeProducts from '../Components/HomeProducts';
import RecentViewSlider from '../Components/RecentViewSlider';
import Seo from '../Components/Seo';

function HomePage() {
    const recentList = useSelector(state=>state.productDetail);
    return (
        <>
        <Seo title={"Ecom demo App created by Chetan"} description={"Ecom react ecommece demo App created by Chetan"}/>
            <HomeProducts />
            {recentList.recentItems.length > 0 && <RecentViewSlider/>}
            
         
        </>
    )
}

export default HomePage;
