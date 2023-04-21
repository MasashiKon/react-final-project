import { StateCreator } from "zustand";

export interface User {
    id: number
    didToday: boolean
    streak: number
    toggleToTrue(): void
    getUserInfo: ({}) => void
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