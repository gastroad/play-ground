import { snapshot_UNSTABLE } from "recoil";
import { fetchPortfolioList } from "../portfolio/selectors";
import axios from "axios";

jest.mock("axios");

describe('recoil portfolio', () => {
    test('selector', async () => {
        const mockData = {
            portfolio: []
        };
        axios.get = jest.fn().mockResolvedValue({ data: mockData });
        const mockAPI = {
            get: axios.get
        };
        const initialSnapshot = snapshot_UNSTABLE();
        const release = initialSnapshot.retain();
        try {
            jest.mock("../../api/portfolio", () => mockAPI);
            await initialSnapshot.getPromise(fetchPortfolioList);
            const loadable = initialSnapshot.getLoadable(fetchPortfolioList);
            expect(loadable.state).toBe('hasValue');
            expect(loadable.contents).toEqual([]);
        } finally {
            release();
        }
    });
});
