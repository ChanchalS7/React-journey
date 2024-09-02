import React from "react";
import User from "./User";


class UserCalss extends React.Component {
	constructor(props) {
		super(props);
		// console.log("class-props:", props)
		this.state = {
			count: 0,
			// count2: 2
		}
	}
	render() {
		const { name } = this.props;
		const { count, count2 } = this.state;

		return (

			<div className='user-card'>
				<h2>Count = {this.state.count}</h2>
				{/* <h2>Count2={count2}</h2> */}
				<button onClick={() => {

					//NEVER UPDATE STATE VARIABLES DIRECTLY
					this.setState({
						count: this.state.count + 1,
					})
				}}>Count Increase</button>
				<h1>{name}</h1>
				<h2>Location:Indore</h2>
				<h3>Linkedin:linkedin.com/in/chanchals7</h3>
				<h3>Twitter:Chanchal_S7</h3>
			</div>

		)
	}

}

export default UserCalss
//Never udpate states variable directly in class-component