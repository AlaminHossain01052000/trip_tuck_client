import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import DiscountBanner from '../DiscountBanner/DiscountBanner';
import Footer from '../Footer/Footer';
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
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;
