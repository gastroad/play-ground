import API from "."
import type { Portfolio } from "../types/Portfolio"


const getPortfolioList = async (): Promise<Portfolio[]> => {
    const { data } = await API.get("/portfolio")
    return data.portfolio
}

export { getPortfolioList }
