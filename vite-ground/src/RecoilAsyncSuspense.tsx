import { Suspense, FC, Fragment } from 'react';
import { fetchPortfolioList } from './recoil/portfolio/selectors';
import { useRecoilValue } from 'recoil';

const PortfolioList = () => {
    const portfolioList = useRecoilValue(fetchPortfolioList);

    return (
        <>
            {portfolioList.map((portfolio, index: number) => {
                return <Fragment key={index}>{portfolio.title}</Fragment>;
            })}
        </>
    );
};

const RecoilAsyncSuspense: FC = () => {
    return (
        <Suspense fallback={<>Loading</>}>
            <PortfolioList />
        </Suspense>
    );
};

export default RecoilAsyncSuspense;