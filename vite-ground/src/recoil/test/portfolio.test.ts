import { snapshot_UNSTABLE } from 'recoil';
import { fetchPortfolioList } from "../portfolio/selectors";
// import { getPortfolioList } from '../../api/portfolio';
import { Portfolio } from '../../types/Portfolio';

describe('fetchPortfolioList', () => {
    const initialSnapshot = snapshot_UNSTABLE();
    const release = initialSnapshot.retain();
    const mockData: Portfolio[] = [
        {
            img: "",
            title: "",
            paragraph: "",
            link: "",
        }
    ]
    try {
        expect(initialSnapshot.getLoadable(fetchPortfolioList).valueOrThrow()).toBe(mockData);
    } finally {
        release();
    }

});
