import axios from "axios";

const apiCode = axios.create({
	baseURL:
		"https://burger-api-20-production.up.railway.app",
});

apiCode.interceptors.request.use(async (config) => {
	const userData = await localStorage.getItem(
		"codeburger:userData",
	);
	const token = userData && JSON.parse(userData).token;
	config.headers.Authorization = `Bearer ${token}`;
	return config;
});

export default apiCode;
