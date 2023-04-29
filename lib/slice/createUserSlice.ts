import { StateCreator } from "zustand";

export interface User {
    isLoaded: boolean
    id: number
    name: string
    didToday: boolean
    streak: number
    isLoading: boolean
    identifier: string
    toggleToTrue(): void
    setUserInfo: ({}) => void
    setIsLoading: (isLoading: boolean) => void
    updateStreak: ({}) =>  void
    loadLessons: () => void
}

export interface UserSlice {
    user: User;
    toggleToTrue: () => void;
}

// export const createUserSlice: StateCreator<UserSlice> = () => ({
//     user: {didToday: false},
//     toggleToTrue: () => {

//     },
// })