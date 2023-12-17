import { useState } from "react";
import {CDN_URL} from '../Constants/common';

const RestaurantCard = ({data,cloudinaryImageId}) => {
    const {costForTwo,avgRatingString,cuisines,price,name} = data

    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img
                className="rounded-lg"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines}</h4>
            <h5>{avgRatingString} Star</h5>
            <h6>{costForTwo}</h6>
            <h6>30 Mins</h6>
        </div>
    )
}


export default RestaurantCard