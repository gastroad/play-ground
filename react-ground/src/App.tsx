import { FC } from "react"
import { Provider } from 'react-redux'

import Portfolio from "page/Portfolio"
import store from "src/store/store"

import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

const App: FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <div id={"root-modal"} />
                <Portfolio />
            </Provider>
        </QueryClientProvider>
    )
}
export default App

