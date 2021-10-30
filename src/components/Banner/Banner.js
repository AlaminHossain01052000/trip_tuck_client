import React from 'react';

import "./Banner.css";

const Banner = () => {

    return (
        <div className="banner-container">

            <div className="img-container">
                <img src="https://i.ibb.co/ZNvJLQR/Umbrella-and-chair-on-the-Beautiful-tropical-beach-and-sea-with-coconut-palm-tree-in-paradise-island.jpg" alt="" className="w-100 banner-img" />

                <div className="transparent"></div>
            </div>

            <div className="content">
                <h1 className="text-paste mb-3">Trip Tuck</h1>
                <p className="text-white mb-3">We are promised to give you the best trip of your life . Our clients satisfaction is our one and only goal . We try our best to satisfy our client</p>

                <button className="btn btn-danger banner-explore-btn">Explore Now</button>
            </div>

        </div >
    );
};

export default Banner;