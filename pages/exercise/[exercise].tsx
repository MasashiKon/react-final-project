import React, { useEffect } from 'react'

import { MongoClient } from 'mongodb';

import { useStore } from '../../lib/store';

import { User } from '../../lib/slice/createUserSlice';

import Exercise from '../../components/Exercise/Exercise'

import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import { getSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { get } from 'http';

import { motion } from 'framer-motion';

import Button from '../../components/Button/Button';

function exercise({user}) {

  const setUserInfo = useStore((state: User) => state.setUserInfo)
  const updateStreak = useStore((state: User) => state.updateStreak)
  const {status} = useSession()
  const router = useRouter();

  useEffect(() => {
    if(status === "unauthenticated" || status === "loading") {
      router?.push('/')
    }
  })
  
  return (
    status === 'authenticated' ? 
    <motion.div 
      transition={{
        duration: "0.5"
      }}
      initial={{
        clipPath: "circle(0% at 50% 50%)"
      }}
      animate={{
        clipPath: "circle(70.7% at 50% 50%)"
      }}
      exit={{
        clipPath: "circle(0% at 50% 50%)",
      }}
    >
      <Exercise testUpdate={updateStreak}/>
    </motion.div>
    : <></>
  )
}

// export async function getServerSideProps(context) {
//   const session = await getSession(context);
// }

export default exercise