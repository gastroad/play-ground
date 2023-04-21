import { createSlice } from '@reduxjs/toolkit'
import { fetchPortfolioList } from "api/request"

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState: {
        portfolioList: [{ img: "", title: "", paragraph: "", link: "" }],
        status: "PENDDING"
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPortfolioList.fulfilled, (state, action) => {
            state.portfolioList = action.payload
            state.status = "FULFILLED"
        })
        builder.addCase(fetchPortfolioList.pending, (state) => {
            state.status = "PENDDING"
        })
        builder.addCase(fetchPortfolioList.rejected, (state) => {
            state.status = "REJECTED"
        })
    },

})

export default portfolioSlice
