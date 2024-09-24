import React from "react";
import Person from "../../assets/person.svg";
import Cart from "../../assets/cart.svg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useUser } from "../../hooks/UserContext";

import {
	Container,
	ContainerLeft,
	PageLink,
	ContainerRight,
	ContainerText,
	Line,
	PageLinkExit,
} from "./styles";

export function Header() {
	const { logOut, userData } = useUser();

	const {
		push,
		location: { pathname },
	} = useHistory();

	const logOutUser = () => {
		logOut();
		push("/login");
	};

	return (
		<Container>
			<ContainerLeft>
				<PageLink
					onClick={() => push("/")}
					isActive={pathname === "/"}
				>
					Home
				</PageLink>
				<PageLink
					onClick={() => push("/produtos")}
					isActive={pathname.includes("/produtos")}
				>
					Ver Produtos
				</PageLink>
			</ContainerLeft>

			<ContainerRight>
				<PageLink
					onClick={() => push("/carrinho")}
					isActive={pathname.includes("/carrinho")}
				>
					<img src={Cart} alt="Simbolo do carrinho" />
				</PageLink>
				<Line></Line>
				<PageLink>
					<img src={Person} alt="Simbolo de perfil" />
				</PageLink>

				<ContainerText>
					<p>Olá, {userData.name}.</p>
					<PageLinkExit onClick={logOutUser}>
						Sair
					</PageLinkExit>
				</ContainerText>
			</ContainerRight>
		</Container>
	);
}
