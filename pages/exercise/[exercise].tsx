import React, { useEffect } from 'react'

import { MongoClient } from 'mongodb';

import { useStore } from '../../lib/store';

import { User } from '../../lib/slice/createUserSlice';

import Exercise from '../../components/Exercise/Exercise'

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

import { getSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { get } from 'http';
function exercise({user}) {

  const setUserInfo = useStore((state: User) => state.setUserInfo)
  const updateStreak = useStore((state: User) => state.updateStreak)
  const {status} = useSession()
  const router = useRouter();

  // if(status === "unauthenticated" || status === "loading") {
  //   router.push('/')
  // }
  
  
  return (
    status === 'authenticated' ? <Exercise testUpdate={updateStreak}/> : <></>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if(!session) {
    return {
      props: {
        user: {

        }
      }
    }
  }
  const { user: {name, email} } = session;


  const client = await MongoClient.connect(`mongodb+srv://konnonorth:${process.env.MONGO_PASSWORD}@cluster0.atk8kob.mongodb.net/users?retryWrites=true&w=majority`);

  const db = client.db();

  const usersStatusCollection = db.collection('usersStatus')

  const user = await usersStatusCollection.findOne({$and: [{name}, {email}]}, {projection:{_id:0}})

  client.close();


  return {
    props: {
      user
    }
  }
  
}

export default exercise