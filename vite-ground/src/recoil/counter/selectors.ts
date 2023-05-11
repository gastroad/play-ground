import { selector } from "recoil";
import { counterState } from "./atoms";

export const counterSelector = selector({
    key: "counterSelector",
    get: ({ get }) => {
        const counter = get(counterState);
        return counter;
    },
});
