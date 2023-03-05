import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducer, actionTypes, CounterState } from "@src/store/counter";
import { render, screen } from "@testing-library/react"
import { configuration } from "@src/store"
import { getInt } from "@src/mock/number";
import Counter from "./Counter"

describe("Counter", () => {
    let state: CounterState | null = {
        value: 0,
    };

    beforeEach(() => {
        state = {
            value: 0,
        };
    });
    afterEach(() => {
        state = null
    })

    it("action.increment", () => {
        const action: ReduxAction<number> = {
            type: actionTypes.INCREMENT,
            payload: 2,
        };
        reducer.increment(state!, action);
        expect(state!.value).toEqual(2);
    });

    it("action.decrement", () => {
        const action: ReduxAction<number> = {
            type: actionTypes.DECREMENT,
            payload: 2,
        };
        reducer.decrement(state!, action);
        expect(state!.value).toEqual(-2);
    });

    it("action.incrementAsync suc", async () => {
        const action: ReduxAction<number> = {
            type: actionTypes.INCREMENTASYNC,
            payload: await getInt({ status: "resolve" }),
        }
        reducer.incrementAsync(state!, action);
        expect(state!.value).toEqual(30);
    });
    it("Counter render", () => {
        render(
            <Provider store={configureStore(configuration)}>
                <Counter />
            </Provider>
        )
        expect(screen.findByText("현재숫자"));
    });

});

