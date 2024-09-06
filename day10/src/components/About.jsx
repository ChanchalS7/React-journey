import React from 'react'
import User from './User'
import UserClass from './UserClass'

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
				{/* <User name={"Chanchal V (function)"} /> */}
				{/* <UserClass name={"First"} /> */}
				{/* <UserClass name={"Second"} />
				<UserClass name={"Third"} /> */}
			</div>

		)
	}
}

// const About = () => {
// 	return (
// 		<div>
// 			<h1>Hello, I'm React Learner 🙏 ❤️</h1>
// 			{/* <User name={"Chanchal V (function)"} /> */}
// 			<UserClass name={"Chanchal V (class)"} />
// 		</div>
// 	)
// }

export default About
