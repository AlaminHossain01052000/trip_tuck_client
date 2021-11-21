import React from 'react';
import { useForm } from "react-hook-form";
import "./AddOffer.css";
const AddOffer = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch("http://localhost:5000/offers", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Data inserted successfully");
                    reset();
                }



            })
    };
    return (
        <div id="add-an-offer">
            <h1 className="heading-title">Add an new offer</h1>
            <hr className="heading-line mb-3" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title")} placeholder="Title" />
                <input {...register("img")} placeholder="img-url" />
                <input type="number" {...register("price")} placeholder="Price" />

                <textarea {...register("descriprion")}
                    placeholder="description" className="form-control" id="exampleFormControlTextarea1" rows="3" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddOffer;