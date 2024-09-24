import React from "react";

import { ErrorMessageStyles } from "./styles";

export function ErrorMessage({ children }) {
	return (
		<ErrorMessageStyles>{children}</ErrorMessageStyles>
	);
}
