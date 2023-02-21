import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";

console.log("googleclinet id= " + process.env.GOOGLE_CLIENT_ID);
console.log("google seret id= " + process.env.GOOGLE_CLIENT_SECRET);
console.log("jwt token= " + process.env.JWT_SECRET);

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    secret: process.env.JWT_SECRET
})
