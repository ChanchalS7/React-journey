import { useEffect, useState } from "react"

const useRestaurantMenu = (resId) => {
	const [resInfo, setResInfo] = useState(null)
	// fetchdata
	useEffect(() => {
		fetchMenu()
	}, [])
	const fetchMenu = async () => {
		const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=" + resId)

		const json = await data.json();
		console.log("json:", json)
		setResInfo(json.data)
	}
	return resInfo;
}

export default useRestaurantMenu;
