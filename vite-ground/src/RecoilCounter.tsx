import type { FC } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { counterState } from "./recoil/counter/atoms"
import { counterSelector } from "./recoil/counter/selectors"


const RecoilCounter: FC = () => {
    const [value, setValue] = useRecoilState(counterState)
    const counterValue = useRecoilValue(counterSelector)

    const handleIncreaseButtonClick = () => {
        setValue(value + 1)
    }
    const handleDecreaseButtonClick = () => {
        setValue(value - 1)
    }
    return (
        <>
            <div>{value}</div>
            <div>{counterValue}</div>
            <button onClick={handleIncreaseButtonClick}>inc</button>
            <button onClick={handleDecreaseButtonClick}>dec</button>
        </>
    )
}

export default RecoilCounter