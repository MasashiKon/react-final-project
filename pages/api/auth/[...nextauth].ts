import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { MongoClient } from "mongodb"

import { RequestInternal } from "next-auth"
import { log } from "console"

import sha256 from "sha256"

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  secret: process.env.AUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials: any, req: any) {
        // Add logic here to look up the user from the credentials supplied

        const {username, password} = credentials

        const hashedPass = sha256(password)
        
        const client = await MongoClient.connect(`mongodb+srv://konnonorth:${process.env.MONGO_PASSWORD}@cluster0.atk8kob.mongodb.net/users?retryWrites=true&w=majority`);

        const db = client.db();
      
        const usersStatusCollection = db.collection('usersStatus')
      
        let user: any = await usersStatusCollection.findOne({$and: [{name: username, password: hashedPass}]}, {projection:{_id:0}});

        if(!user) {
          const userObj = {
            name: username,
            password: hashedPass,
            streak: 0,
          }

          await usersStatusCollection.insertOne(userObj)

          user = userObj;
        } 
      
        client.close();        

        return user
        

        // let user;

        // if(res) {                    
        //   user = res
        //   console.log("inside: ", user);
        // } else {
        //   user = {
        //     name: username,
        //     password: hashedPass,
        //     streak: 0
        //   }
        // }

        // console.log("outside: ", user);
        
        
        // if (user) {
        //   // Any object returned will be saved in `user` property of the JWT
        //   return user
        // } else {
        //   // If you return null then an error will be displayed advising the user to check their details.
        //   return null
        //   // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        // }
      }
    })
  ],

  callbacks: {
    async jwt({ token, user, account, profile }) {    
      if(account?.type === 'oauth') {
        try{

          const {name, email} = token;          
          
          const client = await MongoClient.connect(`mongodb+srv://konnonorth:${process.env.MONGO_PASSWORD}@cluster0.atk8kob.mongodb.net/users?retryWrites=true&w=majority`);

          const db = client.db();

          const usersStatusCollection = db.collection('usersStatus')

          const user = await usersStatusCollection.findOne({$and: [{name}, {email}]})         
          
          if(!user) {
            const userObj = {
              name,
              email,
              streak: 0
            }

            await usersStatusCollection.insertOne(userObj)
          }

          client.close();
          
          token.userRole = "admin"
          return token
        } catch(err) {
          console.error(err);
        }
      } else if(account?.type === "credentials") {
        const {password} = user
        token.password = password
      }
      token.userRole = "admin"
      return token
    },
    async session({ session, token, user }) {

      const {password} = token;

      session.user.password = password;
      
      return session
    },
  },
  session: {
    strategy: "jwt"
  },
  jwt: {
    maxAge: 60 * 60
  }
}

export default NextAuth(authOptions)