
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    authUser:[]
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthUser : (state, action) => {
            state.authUser = action.payload;
        }
    }
})

export const { setAuthUser } = authSlice.actions
export default authSlice.reducer