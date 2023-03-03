import { sum } from "./add"
// const { sum } = require("./add")


test("test", () => {
    expect(sum(1, 2)).toBe(3)
})
