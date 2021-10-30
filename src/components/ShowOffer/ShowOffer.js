import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./ShowOffer.css";
const ShowOffer = ({ offer }) => {
    const [addedInWishlist, setAddedInWishlist] = useState(false);
    const { _id, img, title, descriprion, price } = offer;
    const handleAddToWishlist = () => {

        addedInWishlist ? setAddedInWishlist(false) : setAddedInWishlist(true);
    }
    return (

        <Col className="mb-5">
            <Card className="p-3">
                <Card.Img variant="top" src={img} />
                <div className="trip-price">
                    <p> &#2547; {price}</p>

                </div>
                <Card.Body className="text-start">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {descriprion}

                    </Card.Text>
                </Card.Body>
                <div className="d-flex align-middle justify-content-between">
                    <div>
                        <p className="book-now-para">
                            <Link className="book-now-para" to={`/bookingform/${_id}`}>Book Now <i className="fas fa-arrow-right ms-2"></i></Link>
                        </p>
                    </div>

                    <div>
                        <i className={addedInWishlist ? "fas fa-heart" : "far fa-heart"} id="wishlist-icon" title="Add To Wishlist" onClick={handleAddToWishlist} style={{ color: "red" }}></i>
                    </div>

                </div>
            </Card>


        </Col >
    );
};

export default ShowOffer;