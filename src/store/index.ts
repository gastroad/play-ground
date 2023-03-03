import { useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import counter from "./counter"


const store = configureStore({
    reducer: { counter }
})
export default store


export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch


