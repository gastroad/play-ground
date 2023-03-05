function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

const getInt = async (params: mockDataParams): Promise<number> => new Promise((resolve, reject) => {
    setTimeout(() => {
        switch (params.status) {
            case "resolve": resolve(30)
            case "reject": reject()
            default: resolve(30)
        }
    }, 1000)
})

export { getRandomInt, getInt }