import { selector } from "recoil";
import { getPortfolioList } from "../../api/portfolio"

export const fetchPortfolioList = selector({
    key: 'portfolio/fetchPortfolioList',
    get: async () => {
        const res = await getPortfolioList();
        return res
    },
});
