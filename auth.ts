import {NextAuthOptions} from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { adminDb } from "@/firebase/admin";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
       
        name: "Credentials",
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: {  label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          // Add logic here to look up the user from the credentials supplied
          const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
    
          if (user) {
            // Any object returned will be saved in `user` property of the JWT
            return user
          } else {
            // If you return null then an error will be displayed advising the user to check their details.
            return null
    
            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          }
        }
      }),
    EmailProvider({
        server: process.env.EMAIL_SERVER,
        from: process.env.EMAIL_FROM
      }),
  ],
  callbacks: {
    session: async ({session,token})=>{
if(session?.user){
    if(token.sub){
        session.user.id=token.sub;
        const firebaseToken=await adminAuth.createCustomToken(token.sub);
        session.firebaseToken=firebaseToken;
    }
}
return session;
    },
    jwt: async({ user,token}) =>{
      if (user) {
      token.sub=user.id;
      }
      return token;
    },
    },
   session:{
    strategy:'jwt'
    },
    adapter:FirestoreAdapter(adminDb),
  }satisfies NextAuthOptions;
