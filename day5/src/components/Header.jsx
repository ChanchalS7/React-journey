import foodFireLogo from "../../../public/images/foodFireLogo.png"
const Title = () => (
	<a href="/">
		<img className="logo" src={foodFireLogo} alt="Food fire logo" />
	</a>
)
//Header component for header section logo, Nav Items
const Header = () => {
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
				</ul>
			</div>
		</div>
	);
};

export default Header;