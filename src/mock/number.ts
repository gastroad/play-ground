function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

const getInt = async (): Promise<number> => new Promise(resolve => {
    setTimeout(() => { resolve(30) }, 1000)
})

export { getRandomInt, getInt }