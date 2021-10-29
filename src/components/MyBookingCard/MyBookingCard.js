import React, { useState } from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const MyBookingCard = ({ myBookedOffer }) => {
    const { _id, img, name, email, date, address, selectedOffer, totalCost } = myBookedOffer;



    const handleDeletingOffer = (id) => {
        const sureDeleting = window.confirm("Are you sure want to cancel ? ");
        console.log(sureDeleting);
        if (sureDeleting) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }





    }
    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{selectedOffer}</Card.Title>
                    <Card.Text>
                        <p>Date : {date}</p>
                        <p>Total Cost : {totalCost}</p>
                    </Card.Text>
                    <Button variant="danger" onClick={() => handleDeletingOffer(_id)}>Cancel</Button>
                </Card.Body>
            </Card>
        </Col>

        // <tr>




        //     <td>{name}</td>
        //     <td>{email}</td>
        //     <td>{date}</td>
        //     <td>{selectedOffer}</td>
        //     <td>{totalCost}</td>
        //     <td><button className="btn btn-danger">Delete</button></td>




        // </tr>
    );
};

export default MyBookingCard;