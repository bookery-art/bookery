import { authClient } from "../../shared/auth-client";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineNuxtRouteMiddleware(async (to, from) => {
	const { data: session } = await authClient.useSession(useFetch); 
	if (!session.value) {
		if (to.path === "/dashboard") {
			return navigateTo("/");
		}
	}
});