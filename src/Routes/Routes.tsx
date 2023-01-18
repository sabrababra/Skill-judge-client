import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Home from "../pages/Home/Home";
import Booking from "../pages/Home/Booking/Booking";


export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/book/:id",
				element: <Booking />,
				loader:({params})=> fetch(`${process.env.REACT_APP_API_URL}/book/${params.id}`),
			},
		],
	},
]);