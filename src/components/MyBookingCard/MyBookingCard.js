import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const MyBookingCard = ({ myBookedOffer }) => {
    const { _id, img, date, selectedOffer, totalCost, status } = myBookedOffer;



    const handleDeletingOffer = (id) => {
        const sureDeleting = window.confirm("Are you sure want to cancel ? ");
        console.log(sureDeleting);
        if (sureDeleting) {

            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {

                })
        }





    }
    return (
        <Col>
            <Card style={{ width: '18rem' }} className="mb-3">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{selectedOffer}</Card.Title>
                    <Card.Text>
                        <p>Date : {date}</p>
                        <p>Total Cost : {totalCost}</p>
                        <p>Status : {status}</p>
                    </Card.Text>
                    <Button variant="danger" onClick={() => handleDeletingOffer(_id)}>Cancel</Button>
                </Card.Body>
            </Card>
        </Col>


    );
};

export default MyBookingCard;