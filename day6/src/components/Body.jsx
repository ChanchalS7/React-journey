import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
//Body component for body section : It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component with  props with unique key as index
const Body = () => {

	let [listOfRestaurant, setListOfRestaurant] = useState([])
	let [filteredRestaurant, setFilteredRestaurant] = useState([])

	useEffect(() => {
		fetchData();
	}, [])
	const fetchData = async () => {
		const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&");

		const json = await data.json()
		//optional chaining
		setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
	}
	return (

		listOfRestaurant.length === 0 ? <Shimmer /> : (
			<div className="body">
				<div className="filter">
					<button className="filter-btn"
						onClick={() => {
							filteredList = listOfRestaurant.filter((res) => res.data.avgRating > 4.1);
							setListOfRestaurant(filteredList)
						}

						}

					>Top Rated Restaurant</button>

				</div>
				<div className="restaurant-list">
					{listOfRestaurant.map((restaurant) => {
						return <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
					})}
				</div>
			</div>
		)
	)
}

export default Body;