import {create} from 'zustand'
import { UserSlice } from './slice/createUserSlice'

import { User } from './slice/createUserSlice'

type UserState = UserSlice //& OtherSlice

export const useStore = create((set, get) => ({
    id: 0,
    didToday: false,
    name: "",
    streak: 0,
    isLoading: false,
    identifier: null,
    toggleToTrue: () => set({didToday: true}),
    setUserInfo: (user: User) => set({...user}),
    setIsLoading: (isLoading: boolean) => set(() => ({isLoading})),
    updateStreak: async ({identifier, streak, name} : {name: string, identifier: string, streak: number}) => {
        
        const result = await fetch('/api/update-streak', {
            method: 'POST',
            body: JSON.stringify({identifier, name, streak: streak + 1}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await result.json();

        console.log(json.value);
        
        
        
        return set((state: User) => ({streak: json.value}))
    }
    
}))