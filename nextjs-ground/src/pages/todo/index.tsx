import { FC, useEffect, useState } from "react";
import { GetServerSideProps } from "next"

export const getServerSideProps: GetServerSideProps = async context => {
    return { props: { stars: 1 } }
};
interface Props {
    stars: number
}
interface TodoListItem {
    fixed: boolean
    content: string
    status: "ACTIVE" | "DELETED"
}

const MockData: TodoListItem = {
    fixed: false,
    content: "asdsadsad",
    status: "ACTIVE"

}
const todo: FC<Props> = (props) => {
    const { stars } = props
    const [list, setList] = useState<TodoListItem[]>([MockData])

    return (
        <>
            <div>Todo :{stars}</div>
            <ul>
                {list.map((data, index) => {
                    return (
                        <li className={Boolean(data.status === "ACTIVE") && "active"} key={`todolist-item-${index}`}>
                            <div>
                                <label>fixed</label>
                                <input type={"checkbox"} />
                            </div>
                            <div>
                                <span>{data.content}</span>
                            </div>
                        </li>
                    )

                })}
            </ul>
        </>
    )
}

export default todo