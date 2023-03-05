import { DateTime } from "luxon"


const dateData = (length?: number) => {
    let range = 0
    length ? range = length : range = 10
    return new Array(range).fill("").map((rang, index) => {
        return DateTime.now().minus({ day: index }).toISODate()
    })
}

const getDate = async (): Promise<string[]> => new Promise(resolve => {
    setTimeout(() => { resolve(dateData(50)) }, 1000)
})






export { dateData, getDate }