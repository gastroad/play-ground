import { FC } from "react"

export interface Props {
    name?: string
}

const Hello: FC<Props> = (props) => {
    if (props.name) {
        return <h1>Hello, {props.name}!</h1>;
    } else {
        return <span>Hey, stranger</span>;
    }
}

export default Hello

