import {create} from 'zustand'
import { UserSlice } from './slice/createUserSlice'


type UserState = UserSlice //& OtherSlice

export const useStore = create((set) => ({
    didToday: false,
    toggleToTrue: () => set({didToday: true})
}))