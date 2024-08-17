import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import LoginImg from "../../assets/9 1login-image.svg";
import Logo from "../../assets/burger 2logo.svg";
import Button from "../../components/Button";
import { api } from "../../services/api";
import { toast } from "react-toastify";

import {
	Click,
	Container,
	ContainerItens,
	ErrorMessage,
	Input,
	Label,
	LoginImage,
} from "./styles";

function Login() {
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
		const response = await toast.promise(
			api.post("session", {
				email: clientData.email,
				password: clientData.password,
			}),
			{
				pending: "Verificando Seus Dados.",
				success: "Seja Bem-vindo(a)",
				error: "Email ou Senha Incorretos.",
			},
		);

		console.log(response);
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
					<ErrorMessage>{errors.email?.message}</ErrorMessage>

					<Label>Senha</Label>
					<Input
						type="password"
						{...register("password")}
						error={errors.password?.message}
					/>
					<ErrorMessage>{errors.password?.message}</ErrorMessage>

					<Button type="submit">Entrar</Button>
				</form>

				<Click>
					Não possui conta? <a>Clique Aqui!</a>
				</Click>
			</ContainerItens>
		</Container>
	);
}

export default Login;
