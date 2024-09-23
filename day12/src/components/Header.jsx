import { useEffect, useState,useContext } from "react";
import foodFireLogo from "../../../public/images/foodFireLogo.png"
import { Link } from "react-router-dom";
import useOnlineStatus from "./../Hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Title = () => (
	<a href="/">
		<img className="w-16" src={foodFireLogo} alt="Food fire logo" />
	</a>
)
//Header component for header section logo, Nav Items
const Header = () => {
	const [btnName, setBtnName] = useState("Login")
	const onlineStatus = useOnlineStatus()

	const {loggedInUser  } = useContext(UserContext)
	return (
		<div className="flex justify-between shadow-lg m-5 bg-pink-100 mb-2 sm:bg-yellow-50">
			<Title />
			<div className="flex items-center">
				<ul className="flex p-4 m-7">
					<li className="px-4">Onlie Status : {onlineStatus ? "✅" : "🔴"}</li>
					<li className="px-4"><Link to="/">Home</Link></li>
					<li className="px-4"><Link to="/about">About</Link></li>
					<li className="px-4"><Link to="/contact">Contact</Link></li>
					<li className="px-4"><Link to="/grocery">Grocery</Link></li>
					<li className="px-4">
						Cart
					</li>
					<button className="login"
						onClick={() => {
							btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
						}}
					>{btnName}</button>
					<li className="px-4 font-bold">
						{loggedInUser}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;

/*
Twot types of routing in the app:
-Client Side Routing : 
-Server Side Routing

 */