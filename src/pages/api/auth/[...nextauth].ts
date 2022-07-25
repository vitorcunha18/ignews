
import { query as q } from "faunadb"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"


import { fauna } from "../../../services/fauna"

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

  
  callbacks:{
    async signIn({ user,  profile }) {
       const { email } = user 
      console.log(user, email)

      try{
        await fauna.query(
          q.Create(
            q.Collection('users'),
            { data: { email }}
          )
        )

        return true

      }catch{

        return false
      }
    },
  }
})