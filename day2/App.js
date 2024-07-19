//## Ingniting our App

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

import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement(
	"h1",
	{
		"id": "title",
	},
	"heading",

)
const heading1 = React.createElement(
	"h1",
	{
		id: "title",
	},
	"heading1"
)
const container = React.createElement(
	"div",
	{
		id: "container",
	},
	[heading, heading1]
)

//create root using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'))
//passing react element inside root
root.render(container)




















