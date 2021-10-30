import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import "./BookingForm.css";

const BookingForm = () => {
    const [offers, setOffers] = useState([]);

    const { user } = useAuth();


    useEffect(() => {
        fetch("https://murmuring-beyond-73506.herokuapp.com/offers")
            .then(res => res.json())
            .then(data => setOffers(data))
    }, [])
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const myOffer = offers?.find(offer => offer.title === data.selectedOffer)

        data.img = myOffer?.img;
        data.status = "pending";
        data.price = myOffer?.price;
        data.totalCost = (data.numberOfPeople * myOffer?.price);

        fetch("https://murmuring-beyond-73506.herokuapp.com/bookings", {
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