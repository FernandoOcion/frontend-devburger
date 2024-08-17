import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./containers/Login";
import Register from "./containers/Register";
import GlobalStyles from "./styles/globalStyles";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(
	document.getElementById("root"),
);
root.render(
	<>
		<Login />
		<ToastContainer />
		<GlobalStyles />
	</>,
);
