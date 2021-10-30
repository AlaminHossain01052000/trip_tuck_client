import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import DiscountBanner from '../DiscountBanner/DiscountBanner';
import Footer from '../Footer/Footer';
import OurOffers from '../OurOffers/OurOffers';
import OurTourGallery from '../OurTourGallery/OurTourGallery';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <OurOffers></OurOffers>
            <OurTourGallery></OurTourGallery>
            <DiscountBanner></DiscountBanner>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;
