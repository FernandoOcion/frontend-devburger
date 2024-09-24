import React from "react";
import { Container, ContainerItemns } from "./style";
import Orders from "./Orders";
import { SideMenuAdmin } from "../../components";
import ListProducts from "./ListProducts";
import paths from "../../constants/path";
import NewProduct from "./NewProducts";
import EditProduct from "./EditProduct";

export function Admin({ match: { path } }) {
	return (
		<Container>
			<SideMenuAdmin path={path} />
			<ContainerItemns>
				{path === paths.Order && <Orders />}
				{path === paths.Products && <ListProducts />}
				{path === paths.NewProduct && <NewProduct />}
				{path === paths.EditProduct && <EditProduct />}
			</ContainerItemns>
		</Container>
	);
}
