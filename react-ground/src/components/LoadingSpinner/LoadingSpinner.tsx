import { FC } from "react"
import "./LoadingSpinner.scss"

const LoadingSpinner: FC = () => {
    return (
        <div className="lds-ring"
            style={{
                position: "fixed",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(10, 10, 10)",
                left: "0px",
                top: "0px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div >

    )
}

export default LoadingSpinner