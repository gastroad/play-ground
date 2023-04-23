import { FC } from "react"
import PortfolioCard from "./PortfolioCard"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { postPortfolio } from "api/request"

const mockData = {
    etc: [{ id: 1, value: "1" }, { id: 2, value: "2" }, { id: 3, value: "3" }],
    img: "github의 저장공간도 아끼는게 좋으니 이미지 호스팅 을 어디서 할지 고민해봐야겠다.",
    link: "더미 링크",
    paragraph: "더미내용",
    title: "더미 타이틀",
}

interface Props {
    portfolioList: PortfolioCard[]
}

const PortfolioList: FC<Props> = (props) => {
    const { portfolioList } = props
    const queryClient = useQueryClient()

    const { mutate } = useMutation({
        mutationFn: postPortfolio,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['portfolioList'] })
        },
    })


    return (
        <article className="portfolio-wrapper">
            {portfolioList.map((datum, index) => {
                return (
                    <PortfolioCard portfolioCard={datum} key={index} />
                )
            })}
            <button onClick={() => {
                mutate(mockData)
            }}>추가</button>
        </article>
    )
}

export default PortfolioList


