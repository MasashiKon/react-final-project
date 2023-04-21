import React, { useEffect } from 'react'

import { MongoClient } from 'mongodb';

import { useStore } from '../../lib/store';

import { User } from '../../lib/slice/createUserSlice';

import Exercise from '../../components/Exercise/Exercise'
function exercise({user}) {
  const setUserInfo = useStore((state: User) => state.getUserInfo)
  const updateStreak = useStore((state: User) => state.updateStreak)

  useEffect(() => {
    setUserInfo(user)
  }, [])
  
  
  return (
    <Exercise testUpdate={updateStreak}/>
  )
}

export async function getServerSideProps(context) {

  const client = await MongoClient.connect(`mongodb+srv://konnonorth:${process.env.MONGO_PASSWORD}@cluster0.atk8kob.mongodb.net/users?retryWrites=true&w=majority`);

  const db = client.db();

  const usersStatusCollection = db.collection('usersStatus')

  const user = await usersStatusCollection.findOne({name: "testUser"}, {projection:{_id:0}})

  client.close();


  return {
    props: {
      user
    }
  }
  
}

export default exercise