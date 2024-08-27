import { CDN_URL } from "../utils/constants"

//Restaurant card component : Image, name, component
// export const RestaurantCard = ({ cloudinaryImageId, name, avgRating, cuisines, costForTwo, deliveryTime }) => {
// 	// const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, deliveryTime } = resData?.info;
// 	return (
// 		<div className="card">
// 			<img src={CDN_URL + cloudinaryImageId} />
// 			<h2>{name}</h2>
// 			<h4>{cuisines.join(", ")}</h4>
// 			<h4>{area}</h4>
// 			<span>
// 				<h4>

// 					{avgRating} stars
// 				</h4>
// 			</span>
// 			<h4>{costForTwo / 100} FOR TWO</h4>
// 			<h4>{deliveryTime} minutes</h4>
// 		</div>

// 	)
// }
export const RestaurantCard = ({
	cloudinaryImageId,
	name,
	avgRating,
	cuisines,
	costForTwo,
	deliveryTime,

}) => {
	return (
		<div className="card-details">
			<div className="card">
				<img src={CDN_URL + cloudinaryImageId} />
				<div className="ratings">
					<p style={{ margin: "0" }}>
						<strong>{name}</strong>
					</p>
				</div>
				<small>{cuisines.join(", ")}</small> <br /> <br />
				<p
					style={{
						display: "flex",
						justifyContent: "space-around",
					}}
				>
					<small
						style={avgRating > 3 ? { color: "green" } : { color: "orange" }}
					>
						{avgRating}
					</small>
					<small>{costForTwo}</small>{" "}
					<small>{deliveryTime}</small>
				</p>
			</div>
		</div>
	);
};
