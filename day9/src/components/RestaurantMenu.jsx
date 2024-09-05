import { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'

const RestaurantMenu = () => {
	const [resInfo, setResInfo] = useState(null)
	// const params = useParams()
	// console.log("params:", params)
	const { resId } = useParams();

	useEffect(() => {
		fetchMenu()
	}, [])
	const fetchMenu = async () => {
		const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=" + resId)

		const json = await data.json();
		console.log("json:", json)
		setResInfo(json.data)
	}
	if (resInfo === null) return <Shimmer />
	const { name, costForTwoMessage, cuisines } = resInfo?.cards[2]?.card?.card?.info;
	const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
	// console.log("Item", itemCards)
	// console.log("[0]", itemCards[0].card.info.name)
	return (

		<div className='menu'>
			<h1>{name}</h1>
			<p>{cuisines.join(", ")} - {costForTwoMessage}</p>
			<h2>Menu</h2>
			<ul style={{ marginLeft: "50px" }}>
				{itemCards.map((item) => (
					<li key={item.card.info.id}>•{item.card.info.name} - Rs.:{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>
				))}

			</ul>
		</div>
	)
}

export default RestaurantMenu
