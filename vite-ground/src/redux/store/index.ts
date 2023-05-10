import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from "react-redux"

import counterReducer from "./counter/counterSlice"
import portfolioReducer from "./portfolio/portfolioSlice"


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        portfolio: portfolioReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch