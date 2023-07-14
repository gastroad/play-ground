import { snapshot_UNSTABLE } from "recoil";
import { fetchPortfolioList } from "../portfolio/selectors";
import axios from "axios";

jest.mock("axios");

describe('recoil portfolio', () => {
    test('selector', async () => {
        const mockData = {
            portfolio: [
                {
                    "etc": [
                        {
                            "id": 1,
                            "value": "1"
                        },
                        {
                            "id": 2,
                            "value": "2"
                        },
                        {
                            "id": 3,
                            "value": "3"
                        }
                    ],
                    "img": "",
                    "link": "더미 링크",
                    "paragraph": "더미내용",
                    "title": "더미 타이틀",
                    "id": 5
                }
            ]
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
            expect(loadable.contents).toEqual(mockData.portfolio);
        } finally {
            release();
        }
    });
});
