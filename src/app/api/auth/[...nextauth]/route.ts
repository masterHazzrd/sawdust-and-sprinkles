// src/app/api/auth/[...nextauth]/route.ts
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Ensure required environment variables are defined.
if (!process.env.ADMIN_USERNAME || !process.env.ADMIN_PASSWORD || !process.env.NEXTAUTH_SECRET) {
  throw new Error("Missing environment variables: ADMIN_USERNAME, ADMIN_PASSWORD, or NEXTAUTH_SECRET");
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Admin" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials?.username === process.env.ADMIN_USERNAME &&
          credentials?.password === process.env.ADMIN_PASSWORD
        ) {
          return { id: "admin", name: "Site Owner" };
        }
        return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET!, // Non-null assertion as we've checked its existence.
};

const handler = NextAuth(authOptions);
// Export GET and POST handlers per App Router API conventions.
export { handler as GET, handler as POST };
