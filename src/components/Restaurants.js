import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard'
import { API_PATH } from '../Constants/common';

const Restaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log("searchText === ", searchText)
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch(
      API_PATH
    );

    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }

  const onFilter = () => {
    const filteredRes = filteredRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    ); debugger
    if (searchText == "") {
      setListOfRestaurants(filteredRestaurants);
    }
    else {
      setListOfRestaurants(filteredRes);
    }
  }

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
        {listOfRestaurants && listOfRestaurants.map((res) => {
          return <RestaurantCard data={res.info} cloudinaryImageId={res.info.cloudinaryImageId} />
        })}
      </div>
    </div>
  )
}

export default Restaurants;