import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import MyBookingCard from '../MyBookingCard/MyBookingCard';
import "./MyBookings.css";
const MyBookings = () => {
    const { user } = useAuth();
    const [myBookedOffers, setMyBookedOffers] = useState([]);
    useEffect(() => {
        fetch(`https://trip-tuck-server.vercel.app/bookings/${user.email}`)
            .then(res => res.json())
            .then(data => setMyBookedOffers(data))
    }, [myBookedOffers])
    return (
        <div className="w-75 mx-auto mt-5" id="my-bookings" style={{ marginBottom: "300px" }}>
            <h1 className="heading-title">My Bookings</h1>
            <hr className="heading-line mb-5" />
            <Row lg={3} md={2} sm={1} xs={1}>
                {
                    myBookedOffers.map(myBookedOffer => <MyBookingCard
                        key={myBookedOffer._id}
                        myBookedOffer={myBookedOffer}
                    ></MyBookingCard>)
                }
            </Row>


        </div>
    );
};

export default MyBookings;
