import { useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import portfolioSlice from "./portfolioSlice"
import { portfolioApi } from 'src/api/request'

const store = configureStore({
    reducer: {
        portfolio: portfolioSlice.reducer,
        [portfolioApi.reducerPath]: portfolioApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(portfolioApi.middleware),
})
export default store


export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch


