import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const fetchPortfolioList = createAsyncThunk(
    'fetchPortfolioList',
    async () => {
        return await getPortfolioList();
    },
);

const getPortfolioList = async (): Promise<PortfolioCard[]> => {
    const { data } = await axios.get("/api/portfolio")
    return data
}
const postPortfolio = async (body: PortfolioCard): Promise<PortfolioCard[]> => {
    const { data } = await axios.post("/api/portfolio", {
        ...body
    })
    return data
}
const getPortfolio = async (path: { id: number }): Promise<PortfolioCard[]> => {
    const { id } = path
    const { data } = await axios.get(`/api/portfolio/${id}`)
    return data
}
const putPortfolio = async (path: { id: number }, body: PortfolioCard): Promise<PortfolioCard[]> => {
    const { id } = path
    const { data } = await axios.put(`/api/portfolio/${id}`, {
        ...body
    })
    return data
}
const postPortfolioEtc = async (path: { id: number }, body: {
    value: string
}): Promise<PortfolioCard[]> => {
    const { id } = path
    const { data } = await axios.post(`/api/portfolio/${id}/etc`, { ...body })
    return data
}
const putPortfolioEtc = async (path: {
    id: number
    etcId: number
}, body: { value: string }): Promise<PortfolioCard[]> => {
    const { id, etcId } = path
    const { data } = await axios.put(`/api/portfolio/${id}/etc/${etcId}`, {
        ...body
    })
    return data
}

export {
    fetchPortfolioList,
    getPortfolioList,
    postPortfolio,
    getPortfolio,
    putPortfolio,
    postPortfolioEtc,
    putPortfolioEtc,
}