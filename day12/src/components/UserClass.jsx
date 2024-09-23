import React from "react";
import User from "./User";


class UserCalss extends React.Component {
	constructor(props) {
		super(props);
		// console.log("class-props:", props)
		// this.state = {
		// 	count: 0,
		// 	count2: 2
		// }
		// console.log(this.props.name + " child constructor")
		this.state = {
			userInfo: {
				name: "Dummy",
				location: "Default",
				avatar_url: ""
			}
		}
	}
	async componentDidMount() {
		// console.log(this.props.name + " Child Component Did Mount ")
		//MAKE API CALLS
		const data = await fetch("https://api.github.com/users/ChanchalS7")
		const json = await data.json();
		// console.log("data:", json)
		this.setState({ userInfo: json })
	}
	componentDidUpdate() {
		// console.log("component did update")
	}
	componentWillUnmount() {
		// console.log("Component will unmount")
		// clearInterval(this.timer)
	}
	render() {
		// const { name } = this.props;
		// const { count, count2 } = this.state;
		// console.log(this.props.name + " child render")

		const { name, location, avatar_url } = this.state.userInfo;
		return (

			<div className='user-card'>
				{/* <h2>Count = {this.state.count}</h2>
				<h2>Count2={count2}</h2>
				<button onClick={() => {

					//NEVER UPDATE STATE VARIABLES DIRECTLY
					this.setState({
						count: this.state.count + 1,
						count2: this.state.count2 + 1,
					})
				}}>Count Increase</button> */}

				{/* <h1>{name}</h1>
				<h2>Location:Indore</h2>
				<h3>Linkedin:linkedin.com/in/chanchals7</h3>
				<h3>Twitter:Chanchal_S7</h3> */}

				<h2>Name:{name}</h2>
				<h3>Location:{location}</h3>
				<img src={avatar_url} />

			</div>

		)
	}

}

export default UserCalss
//Never udpate states variable directly in class-component

// What is life-cyle in class based component in react ? 
/*
-cycle
-first thing when class loads(mount), constructor is created
- then render is called
- then componentDidMount is called(used for making an api call)
Why make api call inside the componentDidMount()?



Order of Life cycle:
-Parent contructor
-Parent render
	-Akshay Constructor
	-Akshay Render
	-Akshay ComponentDisMount

	-Elon Constructor
	-Elon Render
	-Elon ComponentDidMount

-Parent CompoentDidMount	
##This is wrong order, this is not life cycle works when we have multiple child

Parent Constructor
Parent render

First child constructor
First child render

Second child constructor
Second child render

< DOM UPDATED - IN SINGLE BATCH>
First Child Component Did Mount 
Second Child Component Did Mount 

Parent Component Did Mount 
*/

/** construct the component -> render the component->update the dom->componentDidMount called-> */


/**

*constructor(dummy)
*Render(dummy)
*<HTML Dummy></HTML>
* Component Di Mount
*<API Call></API>
*<This.setState>
*------UPDATE
* render(api data)
*<HTML(new API data)
*ComponentDidUpdate
*
 */