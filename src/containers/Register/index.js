import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import Logo from "../../assets/burger 2logo.svg";
import RegisterImg from "../../assets/register-img.svg";
import { Button, ErrorMessage } from "../../components";
import apiCode from "../../services/api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import {
	Click,
	Container,
	ContainerItens,
	Input,
	Label,
	RegisterImage,
} from "./styles";

export function Register() {
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
			.oneOf(
				[Yup.ref("password")],
				"As senhas devem ser iguais.",
			),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (clientData) => {
		try {
			const { status } = await apiCode.post(
				"users",
				{
					name: clientData.name,
					email: clientData.email,
					password: clientData.password,
				},
				{
					validateStatus: () => true,
				},
			);

			if (status === 200 || status === 201) {
				toast.success("Cadastro Efetuado Com Sucesso.");
			} else if (status === 409 || status === 400) {
				toast.error("Ops! E-mail Já Cadastrado.");
			} else {
				throw new Error();
			}
		} catch (error) {
			toast.error("Falha no Sistema! Tente novamente.");
		}
	};

	return (
		<Container>
			<RegisterImage
				src={RegisterImg}
				alt="Imagem-Registro"
			/>
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
					<ErrorMessage>
						{errors.name?.message}
					</ErrorMessage>

					<Label error={errors.email?.message}>Email</Label>
					<Input
						type="email"
						{...register("email")}
						error={errors.email?.message}
					/>
					<ErrorMessage>
						{errors.email?.message}
					</ErrorMessage>

					<Label error={errors.password?.message}>
						Senha
					</Label>
					<Input
						type="password"
						{...register("password")}
						error={errors.password?.message}
					/>
					<ErrorMessage>
						{errors.password?.message}
					</ErrorMessage>

					<Label error={errors.confirmPassword?.message}>
						Confirmar Senha
					</Label>
					<Input
						type="password"
						{...register("confirmPassword")}
						error={errors.confirmPassword?.message}
					/>
					<ErrorMessage>
						{errors.confirmPassword?.message}
					</ErrorMessage>

					<Button type="submit" style={{ marginTop: 25 }}>
						Cadastrar
					</Button>
				</form>

				<Click>
					Já possui conta?{" "}
					<Link style={{ color: "white" }} to="/login">
						Clique Aqui!
					</Link>
				</Click>
			</ContainerItens>
		</Container>
	);
}
