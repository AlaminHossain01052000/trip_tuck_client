import React from 'react';
import { Container } from 'react-bootstrap';
import "./Footer.css";
const Footer = () => {
    return (
        <section id="footer" className="bg-dark py-3">
            <Container className="d-flex align-items-center justify-content-between text-white">
                <div>
                    <a href="/" className="fw-bold  text-decoration-none footer-link">Privacy Policy |</a>
                    <a href="/" className="fw-bold  text-decoration-none footer-link">| Terms & Conditions</a>
                </div>
                <div>
                    <img src="https://i.ibb.co/1fJ7t29/holiday-logo-travel-summer-beach-260nw-597385868.png" className="w-25" alt="" /><span className="ms-2 font-zen fs-5">Trip-Tuck</span>

                </div>
                <div>
                    <span className="fw-bold text-danger">&#169; Trip Tuck 2021</span>
                </div>
            </Container>
        </section>
    );
};

export default Footer;