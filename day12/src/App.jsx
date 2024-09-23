import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"))
const AppLayout = () => {

	const [userName, setUserName] = useState();
	//authentication
	useEffect(() => {
		//make an API  calls and send username and password
		const data = {
			name:'Chanchal Verma'
		}
		setUserName(data.name);
	},[])
	return (
		<UserContext.Provider value={{loggedInUser:userName, setUserName}}>
			<React.Fragment>
			
			<Header />
				
			
			<Outlet />
			</React.Fragment>
			</UserContext.Provider>
	)
}
const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Body />
			},
			{
				path: '/about',
				element: <Suspense fallback={<h1>Loading..........</h1>}><About /></Suspense>
			},
			{
				path: "/contact",
				element: <Contact />
			},
			{
				path: "/grocery",
				element: <Suspense fallback={<h1>Loading.........</h1>}><Grocery /></Suspense>
			},
			{
				path: "restaurants/:resId",
				element: <RestaurantMenu />
			}
		],
		errorElement: <Error />
	},
	// {
	// 	path: "/about",
	// 	element: <About />
	// },
	// {
	// 	path: "/contact",
	// 	element: <Contact />
	// }
])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)