import type { FC } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch, RootState } from "./redux/store"
import { increment, decrement, incrementByAmount } from "./redux/store/counter/counterSlice"


const ReduxCounter: FC = () => {
    const counter = useSelector((q: RootState) => q.counter)
    const dispatch = useAppDispatch()

    const handleIncreaseButtonClick = () => {
        dispatch(increment())
    }
    const handleDecreaseButtonClick = () => {
        dispatch(decrement())
    }
    const handleIncrementByAmountButtonClick = () => {
        dispatch(incrementByAmount(5))
    }
    return (<>
        <div>{counter.value}</div>
        <button onClick={handleIncreaseButtonClick}>inc</button>
        <button onClick={handleDecreaseButtonClick}>dec</button>
        <button onClick={handleIncrementByAmountButtonClick}>amou</button>
    </>)
}

export default ReduxCounter