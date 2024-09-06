import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
//chunking
//code splitting
//dynamic bundling
//lazy loading
//all these are same to break down your application in smaller chunk
//on demand loading
//dynamic import 
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"))
const AppLayout = () => {
	return (
		<React.Fragment>
			<Header />
			{/* if path="/" */}
			{/* <Body /> */}
			{/* if path="/about" */}
			{/* <About/> */}
			{/* Outlet help to render the different path for children according to the path */}
			<Outlet />
		</React.Fragment>
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