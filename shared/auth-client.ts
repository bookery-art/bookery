import { inferAdditionalFields } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/vue";
import type { serverAuth } from "../server/utils/auth";

export const signIn = async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const data = await authClient.signIn.social({
        provider: "google"
    })
}

export const authClient = createAuthClient({
	plugins: [inferAdditionalFields<typeof serverAuth>()],
});

export const {
	signOut,
	signUp,
	useSession,
	forgetPassword,
	resetPassword,
} = authClient;