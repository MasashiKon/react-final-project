import {create} from 'zustand'
import { UserSlice } from './slice/createUserSlice'

import { User } from './slice/createUserSlice'

type UserState = UserSlice //& OtherSlice

export const useStore = create((set, get) => ({
    id: 0,
    didToday: false,
    streak: 0,
    toggleToTrue: () => set({didToday: true}),
    getUserInfo: (user: User) => set({...user}),
    updateStreak: async ({id, streak} : {id: number, streak: number}) => {
        const result = await fetch('/api/user-status', {
            method: 'POST',
            body: JSON.stringify({id, streak: streak + 1}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await result.json();
        
        
        return set((state: User) => ({streak: json.value}))
    }
    
}))