import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '..';

const portfolioSelector = (state: RootState) => state.portfolio;
export const portfolioListSelector = createSelector(
    portfolioSelector,
    (portfolio) => portfolio.portfolioList
);
export const statusSelector = createSelector(
    portfolioSelector,
    (portfolio) => portfolio.status
);

