import { useEffect, useState } from "react";
import foodFireLogo from "../../../public/images/foodFireLogo.png"
import { Link } from "react-router-dom";
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
					{/* anchor tag must not be used in react, because when I click on the link whole page go refresh so the solution of this is below */}
					{/* you can navigate to differnt page without laoding the page - Link-superpower given by react-router-dom, it just changing the component while while switching from here and there */}
					{/* <li><a href="/">Home</a></li> */}
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/contact">Contact</Link></li>
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