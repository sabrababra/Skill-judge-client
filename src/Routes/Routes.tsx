import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Home from "../pages/Home/Home";
import Booking from "../pages/Home/Booking/Booking";
import Login from "../pages/login/Login";
import Signup from "../pages/login/Signup";
import QuestionAns from "../pages/QuestionAns/QuestionAns";
import SingleQnA from "../pages/QuestionAns/SingleQnA";

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
        loader: ({ params }) =>
          fetch(`${process.env.REACT_APP_API_URL}/book/${params.id}`),
      },

      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/qna",
        loader: () => fetch(`${process.env.REACT_APP_API_URL}/qna`),
        element: <QuestionAns></QuestionAns>,
      },
      {
        path: "/singleqna/:id",
        loader: ({ params }) =>
          fetch(`${process.env.REACT_APP_API_URL}/qnasingle/${params.id}`),
        element:<SingleQnA></SingleQnA>,
      },
    ],
  },
]);
