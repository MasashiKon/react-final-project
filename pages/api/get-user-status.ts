import { MongoClient } from "mongodb"

import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {

    if(req.method === "GET") {
        
        // const date = req.body

        // const client = await MongoClient.connect(`mongodb+srv://konnonorth:${process.env.MONGO_PASSWORD}@cluster0.atk8kob.mongodb.net/users?retryWrites=true&w=majority`);

        // const db = client.db();

        // const usersStatusCollection = db.collection('usersStatus')

        // const user = await usersStatusCollection.findOne({name: "testUser"})

        // client.close();

        // res.json(user)
    }

    if(req.method === "POST") {        
        
        const {name, email} = req.body

        const client = await MongoClient.connect(`mongodb+srv://konnonorth:${process.env.MONGO_PASSWORD}@cluster0.atk8kob.mongodb.net/users?retryWrites=true&w=majority`);

        const db = client.db();
      
        const usersStatusCollection = db.collection('usersStatus')
      
        const user = await usersStatusCollection.findOne({$and: [{name}, {email}]}, {projection:{_id:0}})
      
        client.close();

        res.status(200).json(user)
    }
}

export default handler