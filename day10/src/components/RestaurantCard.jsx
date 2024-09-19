import { CDN_URL } from "../utils/constants"

export const RestaurantCard = ({
	cloudinaryImageId,
	name,
	avgRating,
	cuisines,
	costForTwo,
	deliveryTime,

}) => {
	return (
		<div className="m-4 p-4 w-[250px] bg-gray-50 hover:bg-gray-200 rounded-lg">
			<div className="card">
				<img className="rounded-lg" src={CDN_URL + cloudinaryImageId} />
				<div className="ratings">
					<p className="bold py-4 text-lg" style={{ margin: "0" }}>
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
