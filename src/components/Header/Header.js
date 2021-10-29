import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Header.css";

const Header = () => {
    const { user } = useAuth();
    return (
        <header className="bg-danger">
            <Container>
                <Nav className="justify-content-between align-items-center" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home" className="d-flex align-items-center"><img src="https://i.ibb.co/1fJ7t29/holiday-logo-travel-summer-beach-260nw-597385868.png" className="w-25" alt="" /><span className="ms-2 font-zen fs-5">Trip-Tuck</span></Nav.Link>
                    </Nav.Item>
                    <div className="d-flex justify-content-end">

                        <Nav.Item>
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/myevent">My Events</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/bookingform/1">Booking Form</Nav.Link>
                        </Nav.Item>

                        {
                            user?.email && <Nav.Item>
                                <Nav.Link as={Link} to="/home" >
                                    Logout
                                </Nav.Link>
                            </Nav.Item>

                        }
                        <Nav.Item>
                            <Nav.Link as={Link} to="/myBookings">My Bookings</Nav.Link>
                        </Nav.Item>
                    </div>
                </Nav>
            </Container>
        </header>
    );
};

export default Header;