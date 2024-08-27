import { RestaurantCard } from "./RestaurantCard";
import { restaurantList } from './../utils/mockData.js';
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.jsx";
//Body component for body section : It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component with  props with unique key as index
const Body = () => {

	let [listOfRestaurants, setListOfRestaurants] = useState([])
	//whenver state variables update, react triggers a reconcilliation cycle(re-render the component)

	useEffect(() => {
		fetchData();
	}, [])
	const fetchData = async () => {
		const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.8973944&lng=78.0880129&page_type=DESKTOP_WEB_LISTING");

		const json = await data.json()
		console.log("Json:", json);
	}
	if (listOfRestaurants.length === 0) {
		return <Shimmer />
	}
	return (
		<div className="body">
			<div className="filter">
				<button className="filter-btn"
					onClick={() => {
						filteredList = listOfRestaurants.filter((res) => res.data.avgRating > 4.1);
						setListOfRestaurants(filteredList)
					}

					}

				>Top Rated Restaurant</button>

			</div>
			<div className="restaurant-list">
				{listOfRestaurants.map((restaurant) => {
					return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
				})}
			</div>
		</div>
	)
}

export default Body;