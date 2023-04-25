import { StateCreator } from "zustand";

export interface User {
    id: number
    name: string
    didToday: boolean
    streak: number
    isLoading: boolean
    toggleToTrue(): void
    setUserInfo: ({}) => void
    setIsLoading: (isLoading: boolean) => void
    updateStreak: ({}) =>  void
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