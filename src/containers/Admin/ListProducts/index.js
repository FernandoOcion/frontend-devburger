import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CancelIcon from "@mui/icons-material/Cancel";
import formatCurrency from "../../../utils/formatCurrency";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { Container, Img, EditIconStyles } from "./styles";
import apiCode from "../../../services/api";
import paths from "../../../constants/path";

function ListProducts() {
	const [products, setProducts] = useState();
	const { push } = useHistory();

	useEffect(() => {
		async function loadOrders() {
			const { data } = await apiCode.get("products");

			setProducts(data);
		}
		loadOrders();
	}, []);

	function isOffer(offerStatus) {
		if (offerStatus) {
			return <CheckBoxIcon style={{ color: "#228B22" }} />;
		}
		return <CancelIcon style={{ color: "red" }} />;
	}

	function editProduct(product) {
		push(paths.EditProduct, { product });
	}

	return (
		<Container>
			<TableContainer component={Paper}>
				<Table
					sx={{ minWidth: 650 }}
					aria-label="simple table"
				>
					<TableHead>
						<TableRow>
							<TableCell align="center">Nome</TableCell>
							<TableCell align="center">Preço</TableCell>
							<TableCell align="center">
								Produto em Oferta
							</TableCell>
							<TableCell align="center">
								Imagem do Produto
							</TableCell>
							<TableCell align="center">Editar</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{products &&
							products.map((product) => (
								<TableRow
									key={product.id}
									sx={{
										"&:last-child td, &:last-child th": {
											border: 0,
										},
									}}
								>
									<TableCell
										align="center"
										component="th"
										scope="row"
									>
										{product.name}
									</TableCell>
									<TableCell align="center">
										{formatCurrency(product.price)}
									</TableCell>
									<TableCell align="center">
										{isOffer(product.offer)}
									</TableCell>
									<TableCell align="center">
										<Img
											src={product.url}
											alt="imagem-produto"
										/>
									</TableCell>
									<TableCell align="center">
										<EditIconStyles
											onClick={() => editProduct(product)}
										/>
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	);
}

export default ListProducts;
