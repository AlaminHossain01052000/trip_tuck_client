import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ShowOffer from '../ShowOffer/ShowOffer';
import "./OurOffers.css";

const OurOffers = () => {
    const [offers, setOffers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/offers")
            .then(res => res.json())
            .then(data => setOffers(data))
    }, [])

    return (
        <section id="our-offers" className="mt-5">
            <h1 className="heading-title">Our Offers</h1>
            <hr className="heading-line" />
            <Container className="mt-4">

                <Row lg={3} md={2} sm={1} xs={1}>
                    {
                        offers.map(offer => <ShowOffer
                            key={offer._id}
                            offer={offer}
                        ></ShowOffer>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default OurOffers;