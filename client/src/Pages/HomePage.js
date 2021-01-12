import React from 'react';
import { useSelector } from 'react-redux';
import HomeProducts from '../Components/HomeProducts';
import RecentViewSlider from '../Components/RecentViewSlider';

function HomePage() {
    const recentList = useSelector(state=>state.productDetail);
    return (
        <>
            <HomeProducts />
            {recentList.recentItems.length > 0 && <RecentViewSlider/>}
            
         
        </>
    )
}

export default HomePage;
