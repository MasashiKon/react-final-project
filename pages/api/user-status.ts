import { MongoClient } from "mongodb"

import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {

    if(req.method === "GET") {
        
        const date = req.body

        const client = await MongoClient.connect(`mongodb+srv://konnonorth:${process.env.MONGO_PASSWORD}@cluster0.atk8kob.mongodb.net/users?retryWrites=true&w=majority`);

        const db = client.db();

        const usersStatusCollection = db.collection('usersStatus')

        const user = await usersStatusCollection.findOne({name: "testUser"})

        client.close();

        res.json(user)
    }

    if(req.method === "POST") {

        console.log(req.body);
        
        
        const {id, streak} = req.body

        const client = await MongoClient.connect(`mongodb+srv://konnonorth:${process.env.MONGO_PASSWORD}@cluster0.atk8kob.mongodb.net/users?retryWrites=true&w=majority`);

        const db = client.db();

        const usersStatusCollection = db.collection('usersStatus')

        const user = await usersStatusCollection.findOneAndUpdate({id}, { $set: {streak}})

        client.close();

        console.log(user.value.streak);
        

        res.status(200).json({value: user.value.streak})
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