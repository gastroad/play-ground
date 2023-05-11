import { createSlice } from '@reduxjs/toolkit'
import { fetchPortfolioList } from "./api"

import type { Portfolio } from '../../../types/Portfolio'



export interface PortfolioState {
    portfolioList: Portfolio[]
    status: "PENDING" | "FULFILLED" | "REJECTED"
}

const initialState: PortfolioState = {
    portfolioList: [{ img: "", title: "", paragraph: "", link: "" }],
    status: "PENDING"
}


export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPortfolioList.fulfilled, (state, action) => {
            state.portfolioList = action.payload
            state.status = "FULFILLED"
        })
        builder.addCase(fetchPortfolioList.pending, (state) => {
            state.status = "PENDING"
        })
        builder.addCase(fetchPortfolioList.rejected, (state) => {
            state.status = "REJECTED"
        })
    },
})


export default portfolioSlice.reducer