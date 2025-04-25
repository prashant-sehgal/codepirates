import NextAuth, { AuthOptions } from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import client from '@/app/lib/mongo-db-client'

const authOptions: AuthOptions = {
  adapter: MongoDBAdapter(client),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRE || '',
    }),
  ],
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
