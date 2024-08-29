import { useEffect, useState } from "react";
import foodFireLogo from "../../../public/images/foodFireLogo.png"
const Title = () => (
	<a href="/">
		<img className="logo" src={foodFireLogo} alt="Food fire logo" />
	</a>
)
//Header component for header section logo, Nav Items
const Header = () => {
	const [btnName, setBtnName] = useState("Login")
	console.log("header render")
	// console.log("Header rendered")
	useEffect(() => {
		console.log("useEffect called")
	}, [btnName])
	return (
		<div className="header">
			<Title />
			<div className="nav-items">
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
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