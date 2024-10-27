import NextAuth, { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: AuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.AUTH_GITHUB_ID!,
            clientSecret: process.env.AUTH_GITHUB_SECRET!,
        }),
    ],
};

export default NextAuth(authOptions);
