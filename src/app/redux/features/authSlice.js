"use client"
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userInfo: localStorage && localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials(state, action) {
            state.userInfo = action.payload

            if (typeof window !== "undefined") {
                localStorage.setItem("userInfo", JSON.stringify(action.payload))

                const expired = new Date().getTime() * 30 * 24 * 60 * 60 * 1000
                localStorage.setItem("expired", expired)
            }

        },
        logout(state) {
            state.userInfo = null;
            localStorage.clear("userInfo");
        }
    },
})

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;