import { FC } from "react"

import PortfolioCard from "./PortfolioCard"


interface Props {
    portfolioList: PortfolioCard[]
}

const PortfolioList: FC<Props> = (props) => {
    const { portfolioList } = props

    return (
        <article className="portfolio-wrapper">
            {portfolioList.map((datum, index) => {
                return (
                    <PortfolioCard portfolioCard={datum} key={index} />
                )
            })}
        </article>
    )
}

export default PortfolioList


