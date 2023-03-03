import { FC, useState } from "react"

const Counter: FC = () => {
    const [count, setCount] = useState<number>(0)

    const onIncrease = () => {
        setCount(count + 1)
    }
    const onDecrease = () => {
        setCount(count - 1)
    }

    return (
        <>
            <div>
                현재숫자
                {count}
            </div>
            <div>
                <button onClick={onIncrease}> 증가</button>
                <button onClick={onDecrease}>감소</button>
            </div>

        </>
    )
}

export default Counter