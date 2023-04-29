import { MongoClient } from "mongodb"

import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {

    if(req.method === "GET") {

        const client = await MongoClient.connect(`mongodb+srv://konnonorth:${process.env.MONGO_PASSWORD}@cluster0.atk8kob.mongodb.net/lessonData?retryWrites=true&w=majority`);

        const db = client.db();

        const usersStatusCollection = db.collection('course1')

        const user = await usersStatusCollection.find({}, {projection:{_id:0}}).toArray();

        client.close();

        res.json(user)
    }
}

export default handler