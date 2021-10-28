import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import "./Header.css";

const Header = () => {
    return (
        <header className="bg-danger">
            <Container>
                <Nav className="justify-content-between align-items-center" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home" className="d-flex align-items-center"><img src="https://i.ibb.co/1fJ7t29/holiday-logo-travel-summer-beach-260nw-597385868.png" className="w-25" alt="" /><span className="ms-2 font-zen fs-5">Trip-Tuck</span></Nav.Link>
                    </Nav.Item>
                    <div className="d-flex justify-content-end">

                        <Nav.Item>
                            <Nav.Link href="/home">Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="disabled" disabled>
                                Disabled
                            </Nav.Link>
                        </Nav.Item>
                    </div>
                </Nav>
            </Container>
        </header>
    );
};

export default Header;