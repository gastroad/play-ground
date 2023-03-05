import { useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import counter from "./counter"

export const configuration = {
    reducer: { counter }
}


const store = configureStore(configuration)
export default store


export declare type RootState = ReturnType<typeof store.getState>
export declare type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch


