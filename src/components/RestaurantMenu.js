import { useEffect, useState } from "react";
import Shimmer from './Shimmer';
import { useParams } from "react-router-dom";
import {MENU_API_URL} from '../Constants/common'

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    useEffect(()=> {
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        let data = await fetch(MENU_API_URL + resId);
        const json = await data.json();
        setResInfo(json.data);
    }
    if(resInfo === null) return <Shimmer />

    const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log('itemCards ---- ',itemCards)
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines}</h2>
            <ul>
                {itemCards.map((item) => 
                    (
                        <li>{item.card.info.name}</li>
                    )
                )}
            </ul>
            <h3>{costForTwoMessage}</h3>
        </div>
    )
}

export default RestaurantMenu;