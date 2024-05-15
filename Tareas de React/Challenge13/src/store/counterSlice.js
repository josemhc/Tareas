import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    counter: 0
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers: {
        incrementByValue:(state, accion) => {
            state.counter += accion.payload
        },
        increment:(state) => {
            state.counter += 1
        }
    }
})

export const { increment, incrementByValue } = counterSlice.actions