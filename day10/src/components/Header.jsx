import { useEffect, useState } from "react";
import foodFireLogo from "../../../public/images/foodFireLogo.png"
import { Link } from "react-router-dom";
import useOnlineStatus from "./../Hooks/useOnlineStatus";
const Title = () => (
	<a href="/">
		<img className="w-16" src={foodFireLogo} alt="Food fire logo" />
	</a>
)
//Header component for header section logo, Nav Items
const Header = () => {
	const [btnName, setBtnName] = useState("Login")
	const onlineStatus = useOnlineStatus()
	return (
		<div className="flex justify-between shadow-lg m-5 bg-pink-100 mb-2 p">
			<Title />
			<div className="nav-items">
				<ul className="flex p-4 m-7">
					<li>Onlie Status : {onlineStatus ? "✅" : "🔴"}</li>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/contact">Contact</Link></li>
					<li><Link to="/grocery">Grocery</Link></li>
					<li>
						<i class="fa-solid fa-cart-shopping"></i>
					</li>
					<button className="login"
						onClick={() => {
							btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
						}}
					>{btnName}</button>
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