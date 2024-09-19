import React from 'react'

//Hook for handling error - hook is just a function with some specific purpose
import { useRouteError } from 'react-router-dom'
const Error = () => {
	const err = useRouteError();
	console.log("err:", err)
	return (
		<div>
			<h1>Oops!!</h1>
			<h2>Something went wrong!!❌</h2>
			<h3>{err.status}:{err.statusText}</h3>
			<p>{err.data}</p>
		</div>
	)
}

export default Error
