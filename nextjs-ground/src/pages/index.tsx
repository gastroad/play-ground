import { FC } from "react"
import Link from 'next/link'

const HomePage: FC = () => {
    return (
        <>
            <div>Welcome to Next.js!</div>
            <Link href={"todo"}>TODO</Link >
        </>
    )
}

export default HomePage