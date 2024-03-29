import { FC } from "react"
import { useRouter } from "next/router"

const HomePage: FC = () => {
    const router = useRouter()
    const { name } = router.query
    return (
        <>
            <div>{router.pathname}</div>
            <div>[{name}]</div>
        </>
    )
}

export default HomePage