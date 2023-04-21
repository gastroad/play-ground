import { createAsyncThunk } from '@reduxjs/toolkit'

import { portfolioCardData } from "./mockData"

const fetchPortfolioList = createAsyncThunk(
    'fetchPortfolioList',
    async () => {
        return await getPortfolioList();
    },
);

const getPortfolioList = async (): Promise<PortfolioCard[]> => {
    return new Promise(resolve => {
        setTimeout(() => { resolve(portfolioCardData) }, 1000)
    })
}

export { fetchPortfolioList }