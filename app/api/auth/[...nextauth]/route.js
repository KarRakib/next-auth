import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
      // GOOGLE_CLIENT_ID=937700927628-s9rgkptvio9b12ffbg8tdo680njh3qig.apps.googleusercontent.com
      // GOOGLE_CLIENT_SECRET=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
    })
  ]
})
export { handler as GET, handler as POST }