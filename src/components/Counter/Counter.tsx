import { FC } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch, RootState } from "@src/store"
import { action } from "@src/store/counter"
import useInput from "@src/hooks/useInput"

const Counter: FC = () => {
    const { value } = useSelector((state: RootState) => state.counter)
    const dispatch = useAppDispatch()
    const input = useInput()

    const onIncrease = () => {
        dispatch(action.incrementValue(Number(input.value)))
    }
    const onDecrease = () => {
        dispatch(action.decrementValue(Number(input.value)))
    }
    const onIncreaseWithFetch = () => {
        dispatch(action.increaseWithFetch({ status: "resolve" }))
    }

    return (
        <>
            <div>
                현재숫자
                {value}
            </div>
            <div>
                <input {...input} type={"number"} />
                <button onClick={onIncrease}>증가</button>
                <button onClick={onDecrease}>감소</button>
                <button onClick={onIncreaseWithFetch}>비동기 증가</button>
            </div>

        </>
    )
}


export default Counter


