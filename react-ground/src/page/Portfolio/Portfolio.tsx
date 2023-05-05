import { FC } from 'react'
import { useQuery } from "@tanstack/react-query"
import { getPortfolioList, useGetPortfolioListQuery, } from "api/request"
import { useSelector } from 'react-redux'
import { RootState } from 'src/store/store'

import PortfolioList from "./PortfolioList"


const Portfolio: FC = () => {
    const reactQuery = useQuery({ queryKey: ['portfolioList'], queryFn: getPortfolioList })
    const rtkQuery = useGetPortfolioListQuery();


    if (reactQuery.status == "error") {
        return <>에러 발생</>
    }
    if (reactQuery.status == "loading") {
        return <> 로딩중 </>
    }
    return (
        <>
            {<PortfolioList portfolioList={reactQuery.data.portfolio!} />}
        </>
    )
}
export default Portfolio 