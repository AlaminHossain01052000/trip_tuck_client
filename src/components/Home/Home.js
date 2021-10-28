import React from 'react';
import Banner from '../Banner/Banner';
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
        </div>
    );
};

export default Home;
