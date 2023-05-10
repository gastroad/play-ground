import type { FC } from "react"
import ReduxCounter from "./ReduxCounter"
import ReduxAsync from "./ReduxAsync"


const App: FC = () => {
  return (
    <>
      <ReduxCounter />
      <ReduxAsync />
    </>
  )
}

export default App
