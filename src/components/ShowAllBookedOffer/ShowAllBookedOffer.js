import React, { useEffect, useState } from 'react';

const ShowAllBookedOffer = (props) => {
    const [bookings, setBookings] = useState([]);
    const [approvableTrip, setApprovableTrip] = useState({});
    const { _id, name, email, date, selectedOffer, totalCost, status } = props.allBookedOffer;
    useEffect(() => {
        fetch("http://localhost:5000/bookings")
            .then(res => res.json())
            .then(data => {
                setBookings(data)
                data.map(booking => {
                    if (booking._id === _id) {
                        setApprovableTrip(booking);
                    }
                })
            });
    }, [bookings])
    const handleStatusUpdating = id => {

        approvableTrip.status = "approved";

        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(approvableTrip)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("Status Updated To Approved");
                    window.location.reload();

                }
            })
    }
    const handleDeletingBooking = id => {
        const isConfirmed = window.confirm("Are you sure want to delete ? ")
        if (isConfirmed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "delete"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        alert("Successfully Deleted");
                        window.location.reload();

                    }
                })
        }

    }
    return (
        <tr>




            <td>{name}</td>
            <td>{email}</td>
            <td>{date}</td>
            <td>{selectedOffer}</td>
            <td>{totalCost}</td>
            <td>{status}</td>
            <td><button className="btn btn-primary" onClick={() => handleStatusUpdating(_id)}>Ok</button></td>

            <td><button className="btn btn-danger" onClick={() => {
                handleDeletingBooking(_id)
            }}>Delete</button></td>




        </tr>
    );
};

export default ShowAllBookedOffer;