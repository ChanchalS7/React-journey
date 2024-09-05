import React, { useState } from 'react'

const User = ({ name }) => {
	// const [count] = useState(0)
	//How to update state in functional component
	const [count, setCount] = useState(0)
	const [count2] = useState(2)
	return (
		<div className='user-card'>
			{/* <h1>Chanchal V</h1> */}
			<h2>Count={count}</h2>
			<h2>Count2={count2}</h2>
			<h1>{name}</h1>
			<h2>Location:Indore</h2>
			<h3>Linkedin:linkedin.com/in/chanchals7</h3>
			<h3>Twitter:Chanchal_S7</h3>
		</div>
	)
}

export default User
