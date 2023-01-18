import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/login/Signup";


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
				path: "signup",
				element: <Signup></Signup>
			},
			{
				path: "login",
				element: <Login></Login>
			}


		],
	},
]);