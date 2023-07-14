// import API from "./index";
import type { Portfolio } from "../types/Portfolio";
import axios from "axios";

const getPortfolioList = async (): Promise<Portfolio[]> => {
    const { data } = await axios.get("/api/portfolio");
    return data.portfolio;
};

export { getPortfolioList };
