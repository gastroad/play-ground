import { createAsyncThunk } from "@reduxjs/toolkit"
import { getPortfolioList } from "../../../api/portfolio";

export const fetchPortfolioList = createAsyncThunk(
    'portfolio/fetchPortfolioList',
    async () => {
        const response = await getPortfolioList()
        return response
    },
);



