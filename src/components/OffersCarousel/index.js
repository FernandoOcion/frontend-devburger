import React, { useEffect, useState } from "react";
import Offers from "../../assets/OFERTASoffers.png";
import {
	Container,
	CategoryImg,
	ContainerItems,
	Image,
	Button,
} from "./styles";
import apiCode from "../../services/api";
import Carousel from "react-elastic-carousel";
import formatCurrency from "../../utils/formatCurrency";
import { useCart } from "../../hooks/CartContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function OffersCarousel() {
	const [offers, setOffers] = useState([]);
	const { putProductInCart } = useCart();
	const { push } = useHistory();

	useEffect(() => {
		async function loadOffers() {
			const { data } = await apiCode.get("products");

			const onlyOffers = data
				.filter((products) => products.offer)
				.map((products) => {
					return {
						...products,
						formatedPrice: formatCurrency(products.price),
					};
				});

			setOffers(onlyOffers);
		}

		loadOffers();
	}, []);

	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 400, itemsToShow: 2 },
		{ width: 600, itemsToShow: 3 },
		{ width: 900, itemsToShow: 4 },
		{ width: 1300, itemsToShow: 5 },
	];

	return (
		<Container>
			<CategoryImg src={Offers} alt="Logo da oferta" />

			<Carousel
				itemsToShow={5}
				style={{ width: "90%" }}
				breakPoints={breakPoints}
			>
				{offers &&
					offers.map((products) => (
						<ContainerItems key={products.id}>
							<Image
								src={products.url}
								alt="Foto da produto"
							/>
							<p>{products.name}</p>
							<p>{products.formatedPrice}</p>
							<Button
								onClick={() => {
									putProductInCart(products);
									push("/carrinho");
								}}
							>
								Peça Agora
							</Button>
						</ContainerItems>
					))}
			</Carousel>
		</Container>
	);
}
