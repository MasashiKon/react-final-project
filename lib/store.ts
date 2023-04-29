import {create} from 'zustand'
import { UserSlice } from './slice/createUserSlice'

import { User } from './slice/createUserSlice'

import { createCourseSlice } from './slice/courseSlice'

type UserState = UserSlice //& OtherSlice

export const useStore = create((set, get) => ({
    ...createCourseSlice(set),
    id: 0,
    didToday: false,
    name: "",
    streak: 0,
    isLoading: false,
    identifier: null,
    course: {
        exercise1: {
            isDone: false
        },
        exercise2: {
            isDone: false
        },
        exercise3: {
            isDone: false
        }
    },
    toggleToTrue: () => set({didToday: true}),
    setUserInfo: (user: User) => set({...user}),
    setIsLoading: (isLoading: boolean) => set(() => ({isLoading})),
    updateStreak: async ({identifier, streak, name, exercise} : {name: string, identifier: string, streak: number, exercise: number}) => {
        
        const result = await fetch('/api/update-streak', {
            method: 'POST',
            body: JSON.stringify({identifier, name, streak: streak + 1, exercise}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await result.json();        
        
        if(json !== null) {
            return set((state: User) => ({streak: json.value.streak, course: json.value.course}))
        } else {
            return set((state: User) => ({...state}))
        }
        
    }
    
}))