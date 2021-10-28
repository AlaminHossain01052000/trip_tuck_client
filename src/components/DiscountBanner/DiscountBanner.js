import React from 'react';
import { Container } from 'react-bootstrap';
import "./DiscountBanner.css";

const DiscountBanner = () => {
    return (
        <div className="discount-content">

            <Container className="">

                <div className="text-white text-start w-50 pt-5">
                    <h1 className="mb-3 font-alumni-sans" style={{ letterSpacing: "4px" }}>Spring Event 2021</h1>
                    <h3 className="mb-3 font-gayathri">Get 25% Discount in any package</h3>
                    <h5 className="mb-3 font-inika">Every spring we provided a huge oportunity for our travellers to travel at cheap cost </h5>
                    <h2 className="mb-3 font-inika">To Grab The Opportunity Subscribe Now ! </h2>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    <button className="btn btn-danger mt-3 fw-bold">Subscribe</button>
                </div>


            </Container>



        </div>
    );
};

export default DiscountBanner;