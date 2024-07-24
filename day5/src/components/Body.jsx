import { RestaurantCard } from "./RestaurantCard";
import { restaurantList } from './../utils/mockData.js';
import { useState } from "react";
//Body component for body section : It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component with  props with unique key as index
const Body = () => {

	let [listOfRestaurants, setListOfRestaurants] = useState(restaurantList)
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