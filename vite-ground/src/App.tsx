import type { FC } from "react"
import ReduxCounter from "./ReduxCounter"
import ReduxAsync from "./ReduxAsync"
import RecoilCounter from "./RecoilCounter"
import RecoilAsync from "./RecoilAsync"
import RecoilAsyncSuspense from "./RecoilAsyncSuspense"


const App: FC = () => {
  return (
    <>
      <ReduxCounter />
      <ReduxAsync />
      <hr />
      <RecoilCounter />
      <RecoilAsync />
      <RecoilAsyncSuspense />
    </>
  )
}

export default App
