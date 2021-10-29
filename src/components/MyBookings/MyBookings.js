import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import MyBookingCard from '../MyBookingCard/MyBookingCard';
import "./MyBookings.css";
const MyBookings = () => {
    const { user } = useAuth();
    const [myBookedOffers, setMyBookedOffers] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/bookings/${user.email}`)
            .then(res => res.json())
            .then(data => setMyBookedOffers(data))
    }, [user])
    return (
        <div className="w-75 mx-auto my-5" id="my-bookings">
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
            {/* <table>
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date</th>
                    <th>Booked Offers</th>
                    <th>Total Cost</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        myBookedOffers.map(myBookedOffer => <MyBookingCard
                            key={myBookedOffer._id}
                            myBookedOffer={myBookedOffer}
                        ></MyBookingCard>)
                    }
                </tbody>


            </table> */}

        </div>
    );
};

export default MyBookings;