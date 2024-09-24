import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import LoginImg from "../../assets/9 1login-image.svg";
import Logo from "../../assets/burger 2logo.svg";
import { Button, ErrorMessage } from "../../components";
import apiCode from "../../services/api";
import { toast } from "react-toastify";
import { useUser } from "../../hooks/UserContext";
import {
	Link,
	useHistory,
} from "react-router-dom/cjs/react-router-dom.min";

import {
	Click,
	Container,
	ContainerItens,
	Input,
	Label,
	LoginImage,
} from "./styles";

export function Login() {
	const history = useHistory();
	const { putUserData } = useUser();

	const schema = Yup.object({
		email: Yup.string()
			.email("Digite um e-mail válido.")
			.required("O e-mail é obrigatório."),
		password: Yup.string()
			.required("A senha é obrigatória.")
			.min(6, "A senha deve ter no mínimo 6 dígitos."),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (clientData) => {
		const { data } = await toast.promise(
			apiCode.post("sessions", {
				email: clientData.email,
				password: clientData.password,
			}),
			{
				pending: "Verificando Seus Dados.",
				success: "Seja Bem-vindo(a)",
				error: "Email ou Senha Incorretos.",
			},
		);

		putUserData(data);

		setTimeout(() => {
			if (data.admin) {
				history.push("/pedidos");
			} else {
				history.push("/");
			}
		}, 1000);
	};

	return (
		<Container>
			<LoginImage src={LoginImg} alt="Imagem-login" />
			<ContainerItens>
				<img src={Logo} alt="Logo" />
				<h1>Login</h1>

				<form noValidate onSubmit={handleSubmit(onSubmit)}>
					<Label>Email</Label>
					<Input
						type="email"
						{...register("email")}
						error={errors.email?.message}
					/>
					<ErrorMessage>
						{errors.email?.message}
					</ErrorMessage>

					<Label>Senha</Label>
					<Input
						type="password"
						{...register("password")}
						error={errors.password?.message}
					/>
					<ErrorMessage>
						{errors.password?.message}
					</ErrorMessage>

					<Button type="submit">Entrar</Button>
				</form>

				<Click>
					Não possui conta?{" "}
					<Link style={{ color: "white" }} to="/cadastro">
						Clique Aqui!
					</Link>
				</Click>
			</ContainerItens>
		</Container>
	);
}
