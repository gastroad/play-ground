import { FC, Fragment } from "react"
import { fetchPortfolioList } from "./recoil/portfolio/selectors"
import { useRecoilValueLoadable } from "recoil";

const RecoilAsync: FC = () => {
    const portfolioListLoadable = useRecoilValueLoadable(fetchPortfolioList);

    if (portfolioListLoadable.state === "loading") {
        return <>loading</>
    }
    if (portfolioListLoadable.state === "hasError") {
        return <>hasError</>
    }
    return (
        <>
            {portfolioListLoadable.contents.map((portfolio, index: number) => {
                return <Fragment key={index}>{portfolio.title}</Fragment>

            })}
        </>
    )
}

export default RecoilAsync