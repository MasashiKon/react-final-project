import { StateCreator } from "zustand";

export interface User {
    didToday: boolean
    toggleToTrue(): void
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