import React from "react";
import listLinks from "./menu-list";
import LogoutIcon from "@mui/icons-material/Logout";
import { useUser } from "../../hooks/UserContext";

import {
	Container,
	ItemContainer,
	ListLink,
} from "./styles";

export function SideMenuAdmin({ path }) {
	const { logOut } = useUser();
	return (
		<Container>
			<hr></hr>
			{listLinks.map((item) => (
				<ItemContainer
					key={item.id}
					isActive={path === item.link}
				>
					<item.icon className="icon" />
					<ListLink to={item.link}>{item.label}</ListLink>
				</ItemContainer>
			))}
			<hr></hr>
			<ItemContainer
				style={{ position: "fixed", bottom: "30px" }}
			>
				<LogoutIcon style={{ color: "#ffffff" }} />
				<ListLink to="/login" onClick={logOut}>
					Sair
				</ListLink>
			</ItemContainer>
		</Container>
	);
}
