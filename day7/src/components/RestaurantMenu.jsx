import { useEffect, useState } from 'react'
import Shimmer from './Shimmer'

const RestaurantMenu = () => {
	const [resInfo, setResInfo] = useState(null)
	useEffect(() => {
		fetchMenu()
	}, [])
	const fetchMenu = async () => {
		const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=728301&catalog_qa=undefined&submitAction=ENTER")

		const json = await data.json();
		console.log("json:", json)
		setResInfo(json.data)
		console.log('resinfo:', resInfo)
		console.log("Name:", resInfo?.cards[2]?.card?.card?.info?.name)
	}
	return resInfo === null ? (
		<Shimmer />
	) : (

		<div className='menu'>
			<h1>name</h1>
			<img />
			<h2>Menu</h2>

			<ul>
				<li>Biryani</li>
				<li>Burgers</li>
				<li>Diet coke</li>
			</ul>
		</div>
	)
}

export default RestaurantMenu
