import React from 'react'
import User from './User'
import UserClass from './UserClass'
import UserContext from '../utils/UserContext';

class About extends React.Component {
	constructor(props) {
		super(props);
		// console.log("Parent Constructor")

	}
	componentDidMount() {
		// console.log("Parent Component Did Mount ")
	}
	render() {
		// console.log("Parent render")
		return (
			<div>
				<h1>Hello, I'm React Learner 🙏 ❤️</h1>
				<div>
					LoggedIn User
					<UserContext.Consumer>{({loggedInUser}) => (<h1 className='text-xl font-bold'>{ loggedInUser}</h1>)}</UserContext.Consumer>
				</div>
				<User name={"Chanchal V"} />
			
				{/* <UserClass name={"First"} /> */}
				{/* <UserClass name={"Second"} />
				<UserClass name={"Third"} /> */}
			</div>

		)
	}
}


export default About
