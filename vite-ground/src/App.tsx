import { FC, useEffect } from "react"
import ReduxCounter from "./ReduxCounter"
import ReduxAsync from "./ReduxAsync"
import RecoilCounter from "./RecoilCounter"
import RecoilAsync from "./RecoilAsync"
import RecoilAsyncSuspense from "./RecoilAsyncSuspense"
import { getPortfolioList } from "./api/portfolio"


const App: FC = () => {

  useEffect(() => {
    getPortfolioList()
  }, [])

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
