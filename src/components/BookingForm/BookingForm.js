import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import "./BookingForm.css";

const BookingForm = () => {
    const { id } = useParams();
    const [offers, setOffers] = useState([]);
    const [myOffer, setMyOffer] = useState({})
    const { user } = useAuth();


    useEffect(() => {
        fetch("http://localhost:5000/offers")
            .then(res => res.json())
            .then(data => {

                setOffers(data)
                data.map(offer => {
                    if (offer._id === id) {
                        setMyOffer(offer)
                    }
                })
            })
    }, [])
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {


        if (myOffer) {
            data.img = myOffer.img;
            data.status = "pending";
            data.price = myOffer.price;
            data.totalCost = (data.numberOfPeople * myOffer?.price);
            data.selectedOffer = myOffer.title;

            fetch("http://localhost:5000/bookings", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {

                    if (data.insertedId) {
                        alert("seccessfully submitted");
                        reset();
                    }

                })
        }






    };


    return (

        <div id="booking-form">
            {offers && <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} defaultValue={user.displayName} />
                <input {...register("email", { required: true })} placeholder="Your Email" defaultValue={user.email} />
                <input {...register("address", { required: true })} placeholder="Your Address" />

                <input type="text" defaultValue={myOffer?.title} {...register("selectedOffer")} />
                <input type="number"  {...register("numberOfPeople")} placeholder="Number of trevellers" />
                <input type="date"  {...register("date")} />

                <input type="submit" />
            </form>}
        </div>
    );
};

export default BookingForm;