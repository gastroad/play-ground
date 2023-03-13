import { FC, useEffect } from "react";
import { GetServerSideProps } from "next"

export const getServerSideProps: GetServerSideProps = async context => {
    return { props: { stars: 1 } }
};
interface Props {
    stars: number
}


const todo: FC<Props> = (props) => {
    const { stars } = props

    useEffect(() => {

    })


    return (
        <>
            <div>Todo :{stars}</div>
        </>
    )
}

export default todo