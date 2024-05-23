import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        uid: null,
        email: null,
        displayName: null,
        photoUrl: null,
        errorMessage: null
    },
    reducers: {
        register: (state,action) => {
            state.email = action.paylload.email
        },
        logout: (state, action) => {

        },
        checkingCredentials: (state,action) => {
            console.log('Checking')
        }
    }
})

export const { login, logout, checkingCredentials, } = authSlice.actions