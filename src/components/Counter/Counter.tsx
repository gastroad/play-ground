import { FC } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch, RootState } from "@src/store"
import { actionTypes } from "@src/store/counter"

const Counter: FC = () => {
    const { value } = useSelector((state: RootState) => state.counter)
    const dispatch = useAppDispatch()

    const onIncrease = () => {
        dispatch({ type: actionTypes.INCREMENT, payload: 2 })
    }

    const onDecrease = () => {
        // dispatch(decrement())
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


