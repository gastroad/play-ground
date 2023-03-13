import { FC } from "react"
import Link from 'next/link'
import { useRouter } from "next/router"

const HomePage = (temp) => {
    console.log(temp)
    const router = useRouter()

    return (
        <>
            <div>{router.pathname}</div>
            <Link href={"todo"}>TODO</Link >
        </>
    )
}

export default HomePage