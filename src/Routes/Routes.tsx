import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Home from "../pages/Home/Home";
<<<<<<< HEAD
import Booking from "../pages/Home/Booking/Booking";
=======
import Login from "../pages/login/Login";
import Signup from "../pages/login/Signup";
>>>>>>> c7bf187788cc1d61bbe7199d83df51fc9a605013


export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />,
<<<<<<< HEAD
			},
			{
				path: "/book/:id",
				element: <Booking />,
				loader:({params})=> fetch(`${process.env.REACT_APP_API_URL}/book/${params.id}`),
			},
=======
			},
			{
				path: "signup",
				element: <Signup></Signup>
			},
			{
				path: "login",
				element: <Login></Login>
			}


>>>>>>> c7bf187788cc1d61bbe7199d83df51fc9a605013
		],
	},
]);