import { FC } from "react"
import { Provider } from 'react-redux'

import Portfolio from "page/Portfolio"
import store from "src/store/store"

const App: FC = () => {
    return (
        <Provider store={store}>
            <div id={"root-modal"} />
            <Portfolio />
        </Provider>
    )
}
export default App

