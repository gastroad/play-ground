import { FC, useState } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch, RootState } from "@src/store"
import { increment, decrement } from "@src/store/counter"

const Counter: FC = () => {
    const selector = useSelector((state: RootState) => state.counter)
    const { value } = selector
    const [count, setCount] = useState<number>(0)
    const dispatch = useAppDispatch()

    const onIncrease = () => {
        dispatch(increment())
    }
    const onDecrease = () => {
        dispatch(decrement())
    }

    return (
        <>
            <div>
                현재숫자
                {value}
            </div>
            <div>
                <button onClick={onIncrease}>증가</button>
                <button onClick={onDecrease}>감소</button>
            </div>

        </>
    )
}

export default Counter