import React from "react";
import {
	Route,
	Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import { Header } from "../components";

function PrivateRoute({ component, isAdmin, ...rest }) {
	const user = localStorage.getItem("codeburger:userData");

	if (!user) {
		return <Redirect to="/login" />;
	}

	if (isAdmin && !JSON.parse(user).admin) {
		return <Redirect to="/" />;
	}

	return (
		<>
			{!isAdmin && <Header />}
			<Route {...rest} component={component} />
		</>
	);
}

export default PrivateRoute;
