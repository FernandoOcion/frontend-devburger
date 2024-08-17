import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import Logo from "../../assets/burger 2logo.svg";
import RegisterImg from "../../assets/register-img.svg";
import Button from "../../components/Button";
import { api } from "../../services/api";

import {
	Click,
	Container,
	ContainerItens,
	ErrorMessage,
	Input,
	Label,
	RegisterImage,
} from "./styles";

function Register() {
	const schema = Yup.object({
		name: Yup.string().required("O nome é obrigatório."),
		email: Yup.string()
			.email("Digite um e-mail válido.")
			.required("O e-mail é obrigatório."),
		password: Yup.string()
			.required("A senha é obrigatória.")
			.min(6, "A senha deve ter no mínimo 6 dígitos."),
		confirmPassword: Yup.string()
			.required("A senha é obrigatória.")
			.oneOf([Yup.ref("password")], "As senhas devem ser iguais."),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (clientData) => {
		const response = await api.post("users", {
			name: clientData.name,
			email: clientData.email,
			password: clientData.password,
		});
		console.log(response);
	};

	return (
		<Container>
			<RegisterImage src={RegisterImg} alt="Imagem-Registro" />
			<ContainerItens>
				<img src={Logo} alt="Logo" />
				<h1>Cadastre-se</h1>

				<form noValidate onSubmit={handleSubmit(onSubmit)}>
					<Label error={errors.name?.message}>Nome</Label>
					<Input
						type="text"
						{...register("name")}
						error={errors.name?.message}
					/>
					<ErrorMessage>{errors.name?.message}</ErrorMessage>

					<Label error={errors.email?.message}>Email</Label>
					<Input
						type="email"
						{...register("email")}
						error={errors.email?.message}
					/>
					<ErrorMessage>{errors.email?.message}</ErrorMessage>

					<Label error={errors.password?.message}>Senha</Label>
					<Input
						type="password"
						{...register("password")}
						error={errors.password?.message}
					/>
					<ErrorMessage>{errors.password?.message}</ErrorMessage>

					<Label error={errors.confirmPassword?.message}>Confirmar Senha</Label>
					<Input
						type="password"
						{...register("confirmPassword")}
						error={errors.confirmPassword?.message}
					/>
					<ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

					<Button type="submit" style={{ marginTop: 25 }}>
						Cadastrar
					</Button>
				</form>

				<Click>
					Já possui conta? <a>Clique Aqui!</a>
				</Click>
			</ContainerItens>
		</Container>
	);
}

export default Register;
