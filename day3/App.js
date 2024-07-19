//## Ingniting our App
// ## Laying the Foundation
/*
*** Parcel Features ***
* Created a server
* HMR - Hot module Replacement
* File watcher algorithm
* BUILDING
* MINIFY
* Cleaning code (example : remove console.log)
* Dev and Production build
* Super fast build algorithm
* Image optimization
* Caching while development
* Compression
* Compatible with older version of browser
* HTTPS on dev[Example - npx parcel index.html --https]
* Port Number [ Example if port number using in localhost then it will change in port number in another project running on localhost]
* Consistent Hasing Algorithm
* Zero config
* Tree shaking
*
*Transitive Dependencies
*/
//import react and react-dom from nodemodule folder
// import {react, createlement as ce} from "react"

import React from "react";
import ReactDOM from 'react-dom/client';

// Create header element like navbar using createElement
/*
<div className="header">
<h1>Title</h1>
<ul>
*
*
</ul>
<li>Home</li>
<li>About</li>
</div>

*/


//create header element using JSX
// JSX => React.createElement=>Object=>HTML(DOM)=>(babel does all the conversion)

const heading = (
	<h1 id="h1" key="h1">This is JSX</h1>
)

//React component
//Functional component - new way of writing component
//Class component - old way of writing component

//Title component is functional component
const Title = () => {
	return (
		<h1 id="title" key="title">Namaste React</h1>
	)
}

//Header component is functional component
const HeaderComponent = function () {
	return (
		<div>
			<Title />
			{/* <Title()/> */}
			{/* <Title></Title> */}
			<h1>Namaste React</h1>
			<h2>This is h2 tag</h2>
		</div>
	)
}
//create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"))
//passing react element inside root
root.render(<HeaderComponent />)