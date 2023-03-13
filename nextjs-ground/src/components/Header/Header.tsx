import { FC } from "react"
import Link from "next/link"

const Header: FC = () => {
    return (
        <>
            <header>
                <nav>
                    <Link href={"todo"} >todo</Link>
                    <br />
                    <Link href={"hello"} >hello</Link>
                </nav>
            </header>

        </>
    )
}

export default Header