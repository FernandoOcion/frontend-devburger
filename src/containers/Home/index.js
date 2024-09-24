import React from "react";
import HomeLogo from "../../assets/img-home.svg";
import { Container, HomeImg } from "./styles";
import {
	CategoryCarousel,
	OffersCarousel,
} from "../../components";
export function Home() {
	return (
		<Container>
			<HomeImg src={HomeLogo} alt="Logo da home" />
			<CategoryCarousel />
			<OffersCarousel />
		</Container>
	);
}
