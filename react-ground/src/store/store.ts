import { useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import portfolioSlice from "./portfolioSlice"

const store = configureStore({
    reducer: { portfolio: portfolioSlice.reducer }
})
export default store


export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch


