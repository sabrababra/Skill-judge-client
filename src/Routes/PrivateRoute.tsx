import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";


import Spinner from "../SharedComponent/Spinner/Spinner";
import { AuthContext } from "../contexts/AuthProvider";
const PrivateRoute = ({ children }) => {
	const { user, loading }: any = useContext(AuthContext);
	const location = useLocation();
	if (loading) {
		return <Spinner />
	}
	if (user) {
		return children;
	}
	return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
