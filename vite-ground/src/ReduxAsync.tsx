import { FC, useEffect, Fragment } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "./redux/store"
import { fetchPortfolioList } from "./redux/store/portfolio/api"
import { portfolioListSelector, statusSelector } from "./redux/store/portfolio/selector"


const ReduxAsync: FC = () => {
    const portfolioList = useSelector(portfolioListSelector)
    const status = useSelector(statusSelector)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchPortfolioList())
    }, [dispatch])

    if (status === "PENDING") {
        return <>PENDING</>
    }
    if (status === "REJECTED") {
        return <>REJECTED</>
    }
    return (<>
        {portfolioList.map((portfolio, index: number) => {
            return <Fragment key={index}>{portfolio.title}</Fragment>

        })}</>)
}

export default ReduxAsync