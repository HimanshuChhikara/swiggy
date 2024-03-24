import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard'
import { API_PATH } from '../Constants/common';
import { Link } from 'react-router-dom';

const Restaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log("Restaurants component ===")
  useEffect(() => {
    console.log("UseEffect === ")
    fetchData();
  },[])

  const fetchData = async () => {
    const data = await fetch(
      API_PATH
    );

    const json = await data.json();
    debugger
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }

  const onFilter = () => {
    const filteredRes = filteredRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    if (searchText == "") {
      setListOfRestaurants(filteredRestaurants);
    }
    else {
      setListOfRestaurants(filteredRes);
    }
  }

  console.log("listOfRestaurants ---- ",listOfRestaurants)
  return (
    <div className='body'>
      <div className='filter-flex'>
        <div className='search m-4 p-4'>
          <input
            type='text'
            data-testid="searchInput"
            className="border border-solid border-black"
            onChange={(e) => {
              setSearchText(e.target.value)
              onFilter()
            }}
          />
        </div>
        <button
          className="px-4 py-2 bg-green-100 m-4 rounded-lg"
          onClick={() => {
            onFilter()
          }
        }
        >
          Search
        </button>

      </div>
      <div className="flex flex-wrap">
        {listOfRestaurants.map((res) => {
          return 
          <Link>
          <RestaurantCard  data={res.info} cloudinaryImageId={res.info.cloudinaryImageId} />
          </Link>
        })}
      </div>
    </div>
  )
}

export default Restaurants;