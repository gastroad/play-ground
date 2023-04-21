import { useState, FC } from "react"
import cx from "classnames"

interface Props {
    portfolioCard: PortfolioCard
}

const PortfolioCard: FC<Props> = (props) => {
    const [isActive, setIsActive] = useState<boolean>(false)
    const { portfolioCard } = props
    const { img, title, paragraph, link } = portfolioCard

    const handleCardClick = () => {
        setIsActive(!isActive)
        window.open(link)
    }
    return (
        <div className={cx("card", { "fade-out": isActive })} onClick={handleCardClick} >
            <img className="card-img" src={img} />
            <div className="card-txt">
                <h5 className="title">{title}</h5>
                <p className="paragraph">{paragraph}</p>
            </div>
        </div>
    )

}

export default PortfolioCard