import portfolioReducer, {
    PortfolioState,
} from "../store/portfolio/portfolioSlice";

import { fetchPortfolioList } from "../store/portfolio/api";

import type { Portfolio } from "../../types/Portfolio";

describe("portfolio reducer", () => {
    const initialState: PortfolioState = {
        portfolioList: [{ img: "", title: "", paragraph: "", link: "" }],
        status: "PENDING",
    };
    const mockPortfolioList: Portfolio[] = [
        {
            img: "image1.png",
            title: "Title1",
            paragraph: "Paragraph1",
            link: "http://link1.com",
        },
        {
            img: "image2.png",
            title: "Title2",
            paragraph: "Paragraph2",
            link: "http://link2.com",
        },
    ];

    it("should handle initial state", () => {
        expect(portfolioReducer(undefined, { type: "unknown" })).toEqual(initialState);
    });


    it("should handle fetchPortfolioList.pending", () => {
        const action = { type: fetchPortfolioList.pending.type };
        const state: PortfolioState = {
            ...initialState,
            status: "FULFILLED",
        };
        expect(portfolioReducer(state, action)).toEqual({
            ...initialState,
            status: "PENDING",
        });
    });

    it("should handle fetchPortfolioList.fulfilled", () => {
        const action = {
            type: fetchPortfolioList.fulfilled.type,
            payload: mockPortfolioList,
        };
        const state: PortfolioState = {
            ...initialState,
            status: "PENDING",
        };
        expect(portfolioReducer(state, action)).toEqual({
            ...initialState,
            portfolioList: mockPortfolioList,
            status: "FULFILLED",
        });
    });

    it("should handle fetchPortfolioList.rejected", () => {
        const action = { type: fetchPortfolioList.rejected.type };
        const state: PortfolioState = {
            ...initialState,
            status: "PENDING",
        };
        expect(portfolioReducer(state, action)).toEqual({
            ...initialState,
            status: "REJECTED",
        });
    });
});
