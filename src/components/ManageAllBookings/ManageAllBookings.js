import React, { useEffect, useState } from 'react';
import ShowAllBookedOffer from '../ShowAllBookedOffer/ShowAllBookedOffer';
import "./ManageAllBookings.css"
const ManageAllBookings = () => {
    const [allBookedOffers, setAllBookedOffers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/bookings")
            .then(res => res.json())
            .then(data => setAllBookedOffers(data))
    }, [])
    return (
        <div className="mt-5 d-flex justify-content-center" style={{ marginBottom: "380px" }}>


            <table>
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date</th>
                    <th>Booked Offers</th>
                    <th>Total Cost</th>
                    <th>Status</th>
                    <th>Approve</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {
                        allBookedOffers.map(allBookedOffer => <ShowAllBookedOffer
                            key={allBookedOffer._id}
                            allBookedOffer={allBookedOffer}
                        ></ShowAllBookedOffer>)
                    }
                </tbody>


            </table>


        </div>
    );
};

export default ManageAllBookings;