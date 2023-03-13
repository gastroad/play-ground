import { FC } from "react"
import Link from 'next/link'
import { useRouter } from "next/router"

const HomePage: FC = () => {
    const router = useRouter()

    return (
        <>
            <div>{router.pathname}</div>
        </>
    )
}

export default HomePage