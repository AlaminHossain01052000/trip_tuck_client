import React from 'react';
import Banner from '../Banner/Banner';
import DiscountBanner from '../DiscountBanner/DiscountBanner';
import Header from '../Header/Header';
import OurOffers from '../OurOffers/OurOffers';
import OurTourGallery from '../OurTourGallery/OurTourGallery';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <OurOffers></OurOffers>
            <OurTourGallery></OurTourGallery>
            <DiscountBanner></DiscountBanner>
        </div>
    );
};

export default Home;
