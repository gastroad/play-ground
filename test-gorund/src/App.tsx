import { FC } from "react"
import Counter from "@src/components/Counter"
import Hello from "@src/components/Hello"


const App: FC = () => {
    return (
        <>
            <header>

            </header>
            <>
                <Counter />
                <Hello />
                <Hello name="test" />
            </>
            <footer>

            </footer>
        </>
    )
}

export default App