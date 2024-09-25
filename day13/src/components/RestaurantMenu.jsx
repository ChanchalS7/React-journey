
import { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from './../Hooks/useRestaurantMenus';
import RestaurantCategory from './RestaurantCategory';
const RestaurantMenu = () => {
	const { resId } = useParams();

	const resInfo = useRestaurantMenu(resId)

	//props drilling - last part
	const dummy = "Dummy Data"
	//state - lifting state up
	const [showIndex, setShowIndex]=useState(null)

	if (resInfo === null) return <Shimmer />
	const { name, costForTwoMessage, cuisines } = resInfo?.cards[2]?.card?.card?.info;
	const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ||[]
	console.log("menu", resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
		const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

	return (

		<div className='text-center'>
			<h className='font-bold my-6 text-2xl'>{name}</h>
			<p className='font-bold text-lg'>{cuisines.join(", ")} - {costForTwoMessage}</p>
			{/* Categories accordian */}
			{
				categories.map((category, index) =>(
					//controlled component
					<RestaurantCategory
					key={category.card.card.title} data={category?.card?.card}
						showItems={index === showIndex ? true : false}
						setShowIndex={() => setShowIndex(index)}
						dummy={dummy}
				/>))
			}
		</div>
	)
}

export default RestaurantMenu