import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.CLIENT_ID_GITHUB,
      clientSecret: process.env.SECRET_ID_GITHUB,
      authorization: {
        params: {
          scope: 'read:user',
        },
      },
    }),
  ],
})