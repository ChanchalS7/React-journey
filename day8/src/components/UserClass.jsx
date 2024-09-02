import React from "react";
import User from "./User";


class UserCalss extends React.Component {
	constructor(props) {
		super(props);
		// console.log("class-props:", props)
		this.state = {
			count: 0
		}
	}
	render() {
		const { name } = this.props;

		return (

			<div className='user-card'>
				<h3></h3>
				<h1>{name}</h1>
				<h2>Location:Indore</h2>
				<h3>Linkedin:linkedin.com/in/chanchals7</h3>
				<h3>Twitter:Chanchal_S7</h3>
			</div>

		)
	}

}

export default UserCalss