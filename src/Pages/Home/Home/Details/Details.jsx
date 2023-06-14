// import React from 'react';
// picture, toy name, seller name, seller email, price, rating, available quantity, and detail description)
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";


const Details = () => {

    const singleDetails = useLoaderData();
    const { name, sellerName, email, price, Rating, quantity, details,photoURL } = singleDetails
    useEffect ( () => {
        document.title = `Details | ${name}`;
    },[name])
    return (
        <div className="text-center justify-center items-center ">
           
            <div className=" w-98 bg-black border border-red-400 text-center py-8 px-24 text-red-300 shadow-xl items-center">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src={photoURL} className="max-w-sm shadow-2xl rounded " />
                    <div className="text-left font-bold ps-9 bg-gradient-to-r from-black p-3 rounded ">
                        <h2 className="pb-5">________________________________________</h2>
                        <h2>Toy Name: {name}</h2>
                        <h2>Seller Name: {sellerName}</h2>
                        <h2>email: {email}</h2>
                        <h2>Details: {details}</h2>
                        <h2>Rating: {Rating}</h2>
                        <h2>Price: $ {price}</h2>
                        <h2>Quantity: {quantity}</h2>
                        <h2 className="pb-5">________________________________________</h2>
                    </div>
                </div>

            </div>
           
        </div>
    );
};

export default Details;

