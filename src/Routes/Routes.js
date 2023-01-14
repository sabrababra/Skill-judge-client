import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CategoryDetails from "../pages/CategoryDetails/CategoryDetails";





import Home from "../pages/Home/Home";


export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main/>,
		children: [
			{
				path: "/",
				element: <Home/>,
			},
			{
				path:"/categorie/:id",
				element:<CategoryDetails></CategoryDetails>
			}
			
			
		],
	},
]);