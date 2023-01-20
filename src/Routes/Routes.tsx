import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Home from "../pages/Home/Home";
import Booking from "../pages/Home/Booking/Booking";
import Login from "../pages/login/Login";
import Signup from "../pages/login/Signup";
import PrivateRoute from "./PrivateRoute";
import TopQuestion from "../pages/Home/TopQuestions/TopQuestion";

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
				element: (
					<PrivateRoute>
						<Booking />
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`${process.env.REACT_APP_API_URL}/book/${params.id}`),
			},
			{
				path: "/topquestions/:id",
				element: (
					<PrivateRoute>
						<TopQuestion />
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`${process.env.REACT_APP_API_URL}/topquestions/${params.id}`),
			},

			{
				path: "signup",
				element: <Signup></Signup>,
			},
			{
				path: "login",
				element: <Login></Login>,
			},
		],
	},
]);
