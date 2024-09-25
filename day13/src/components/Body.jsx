import { RestaurantCard, withNewLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
//Body component for body section : It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component with  props with unique key as index
const Body = () => {

	let [listOfRestaurant, setListOfRestaurant] = useState([])
	let [filteredRestaurant, setFilteredRestaurant] = useState([])
	const [searchText, setSearchText] = useState("")

	const RestaurantCardNew = withNewLabel(RestaurantCard);
	console.log("List:", listOfRestaurant)
	useEffect(() => {
		fetchData();
	}, [])
	const fetchData = async () => {
		const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&");

		const json = await data.json()
		//optional chaining
		setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
		setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
	}
	//Whenever state variable update, react trigger a reconciliation cycle(re-renders) the component
	// console.log("re-rendering")
	const onlineStatus = useOnlineStatus();
	if (onlineStatus === false) {
		return <h1>Looks like you're not connected with internet❌🛜🛜 <br /> Please check your 🛜🛜🛜internet connection</h1>
	}

	const { loggedInUser, setUserName } = useContext(UserContext)
	return (

		listOfRestaurant.length === 0 ? <Shimmer /> : (
			<div className="body">
				<div className="filter flex">
					<div className="search m-4 px-4 py-2 border-solid border-black">
						<input type="text" placeholder="search-box" value={searchText}
							onChange={(e) => { setSearchText(e.target.value) }}
						/>
						{/* why input box not working  we've bind the value searchText but when I changed the value in input box, so input box won't change unless we change the seachtext */}
						<button
							className="px-4 py-2 m-4 bg-green-100 rounded-lg"
							onClick={() => {
								//filter restaurant card and updates the UI
								//searchtext
								console.log(searchText)
								const filteredRestaurant = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
								setFilteredRestaurant(filteredRestaurant)

							}}>Search</button>
					</div>
					<div className=" m-4 px-4 py-2 border-solid border-black flex items-center">
						<button className="px-4 py-2 bg-gray-100 rounded-lg"
							onClick={() => {
								filteredList = listOfRestaurant.filter((res) => res.data.avgRating > 3.1);
								setListOfRestaurant(filteredList);
							}

							}

						>Top Rated Restaurant</button>
					</div>
					<div className="search m-4 px-4 py-2 flex items-center font-bold">
						<label>UserName</label>
						<input className="border border-black p-2"
							value={loggedInUser}
							onChange={(e) => setUserName(e.target.value)} />
							</div>
				</div>
				<div className="flex flex-wrap">
					{filteredRestaurant.map((restaurant) => {
						return <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
							{restaurant.info.isNewlyOnboarded ? (<RestaurantCardNew {...restaurant.info} />) : (< RestaurantCard  {...restaurant.info} />)}

						</Link>
					})}
				</div>
			</div>
		)
	)
}

export default Body;