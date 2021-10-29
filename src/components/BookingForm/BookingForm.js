import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import "./BookingForm.css";

const BookingForm = () => {
    const [offers, setOffers] = useState([]);
    const [selectedOffer, setSelectedOffer] = useState({})
    const { id } = useParams();
    const { user } = useAuth();
    console.log(user);

    useEffect(() => {
        fetch("http://localhost:5000/offers")
            .then(res => res.json())
            .then(data => setOffers(data))
    }, [])
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const myOffer = offers?.find(offer => offer.title === data.selectedOffer)

        data.img = myOffer.img;
        data.status = "pending";
        data.price = myOffer.price;
        data.totalCost = (data.numberOfPeople * myOffer?.price);
        console.log(data);
        fetch("http://localhost:5000/bookings", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))


    };

    return (

        <div id="booking-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} defaultValue={user.displayName} />
                <input {...register("email", { required: true })} placeholder="Your Email" defaultValue={user.email} />
                <input {...register("address", { required: true })} placeholder="Your Address" />
                <select {...register("selectedOffer")}>
                    {
                        offers?.map(offer => <option value={offer.title}>{offer.title}</option>)
                    }


                </select>
                <input type="number"  {...register("numberOfPeople")} placeholder="Number of trevellers" />
                <input type="date"  {...register("date")} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default BookingForm;