import { useEffect, FC } from 'react'
import { useSelector } from 'react-redux'

import { RootState, useAppDispatch } from "src/store/store"
import { fetchPortfolioList } from "api/request"
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner"

import PortfolioList from "./PortfolioList"


const Portfolio: FC = () => {
    let portfolio = useSelector((state: RootState) => state.portfolio)
    const { portfolioList, status } = portfolio
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchPortfolioList())
    }, [])

    return (
        <>
            {status === "PENDDING" && <LoadingSpinner />}
            <section>
                <PortfolioList portfolioList={portfolioList} />
            </section>
        </>
    )
}
export default Portfolio 