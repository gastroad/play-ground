import { FC } from 'react'
import { useQuery, } from "@tanstack/react-query"
import { getPortfolioList } from "api/request"

import PortfolioList from "./PortfolioList"


const Portfolio: FC = () => {
    const { status, data, error } = useQuery({ queryKey: ['portfolioList'], queryFn: getPortfolioList })

    if (status == "error") {
        console.log(error)
        return <>에러 발생</>
    }
    if (status == "loading") {
        return <> 로딩중 </>
    }
    return (
        <>
            <PortfolioList portfolioList={data} />
        </>
    )
}
export default Portfolio 