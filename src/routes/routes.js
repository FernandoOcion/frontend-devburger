import React from "react";
import {
	Switch,
	Route,
	BrowserRouter as Router,
} from "react-router-dom/cjs/react-router-dom.min";
import PrivateRoute from "./private-route";
import {
	Login,
	Register,
	Home,
	Products,
	Cart,
	Admin,
} from "../containers";
import paths from "../constants/path";

function Routes() {
	return (
		<Router>
			<Switch>
				<Route component={Login} path="/login" />
				<Route component={Register} path="/cadastro" />
				<PrivateRoute exact component={Home} path="/" />
				<PrivateRoute
					component={Products}
					path="/produtos"
				/>
				<PrivateRoute component={Cart} path="/carrinho" />

				<PrivateRoute
					component={Admin}
					path={paths.Order}
					isAdmin
				/>
				<PrivateRoute
					component={Admin}
					path={paths.Products}
					isAdmin
				/>
				<PrivateRoute
					component={Admin}
					path={paths.NewProduct}
					isAdmin
				/>
				<PrivateRoute
					component={Admin}
					path={paths.EditProduct}
					isAdmin
				/>
			</Switch>
		</Router>
	);
}

export default Routes;
