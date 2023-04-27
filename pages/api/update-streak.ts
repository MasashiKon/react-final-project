import { MongoClient } from "mongodb"

import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {

    if(req.method === "POST") {        
        
        const {identifier, streak, name} = req.body

        const client = await MongoClient.connect(`mongodb+srv://konnonorth:${process.env.MONGO_PASSWORD}@cluster0.atk8kob.mongodb.net/users?retryWrites=true&w=majority`);

        const db = client.db();

        const usersStatusCollection = db.collection('usersStatus')

        let user;

        if(identifier.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            user = await usersStatusCollection.findOne({$and: [{name}, {email: identifier}]}, {projection:{_id:0}})
        } else {            
            user = await usersStatusCollection.findOne({$and: [{name}, {password: identifier}]}, {projection:{_id:0}})
        }

        if(user.lastCommit) {
            if(!user.didToday) {
                let updatedUser;
                if(identifier.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
                    updatedUser = await usersStatusCollection.findOneAndUpdate({$and: [{name, email: identifier}]}, { $set: {streak: streak, didToday: true, lastCommit: new Date()}}, {returnDocument: "after", projection:{_id:0}})
                } else {
                    updatedUser = await usersStatusCollection.findOneAndUpdate({$and: [{name, password: identifier}]}, { $set: {streak: streak, didToday: true, lastCommit: new Date()}}, {returnDocument: "after", projection:{_id:0}})
                }

                user = updatedUser.value
            }
        }

        

        
        
        client.close();

        res.status(200).json({value: user.streak})
    }
}

export default handler

// import { getServerSession } from "next-auth/next"
// import { authOptions } from "./auth/[...nextauth]"

// export default async (req, res) => {
//   const session = await getServerSession(req, res, authOptions)

//   if (session) {
//     res.send({
//       content:
//         "This is protected content. You can access this content because you are signed in.",
//     })
//   } else {
//     res.send({
//       error: "You must be signed in to view the protected content on this page.",
//     })
//   }
// }