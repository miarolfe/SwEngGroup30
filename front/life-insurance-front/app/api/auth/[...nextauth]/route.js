import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials) {
                const {email, password} = credentials;
                
                try {
                    await connectMongoDB();
                    const user = await User.findOne({email});
                    if (!user) {
                        return null;
                    }

                    const passwordsMatch = await bcrypt.compare(password, user.password);

                    if (!passwordsMatch) {
                        return null;
                    }

                    return user;
                } catch (error) {
                    console.log(error);
                }
            },
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/Login/loginClient",
    },
    callbacks: {
        async session({session, token, user}) {
            session.user.email = token.email;
            await connectMongoDB();
            session.user.id = await User.findOne({email: token.email}).select("_id");
            return session;
        }
    }
}

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}