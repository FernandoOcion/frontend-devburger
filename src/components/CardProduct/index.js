import React from "react";
import { Button } from "../Button";
import {
	Container,
	Image,
	ProductName,
	ProductPrice,
} from "./styles";
import { useCart } from "../../hooks/CartContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function CardProduct({ product }) {
	const { putProductInCart } = useCart();
	const { push } = useHistory();
	return (
		<Container>
			<Image src={product.url} alt="imagem do produto" />
			<div>
				<ProductName>{product.name}</ProductName>
				<ProductPrice>{product.formatedPrice}</ProductPrice>
				<Button
					onClick={() => {
						putProductInCart(product);
						push("/carrinho");
					}}
					style={{ margin: 0 }}
				>
					Adicionar
				</Button>
			</div>
		</Container>
	);
}
