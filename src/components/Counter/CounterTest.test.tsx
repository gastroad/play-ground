import { reducer, actionTypes, CounterState } from "@src/store/counter";
import { ReduxAction } from "@src/types/redux";

describe("Counter", () => {
    let state: CounterState = {
        value: 0,
    };

    beforeEach(() => {
        state = {
            value: 0,
        };
    });

    test("action.increment", () => {
        const action: ReduxAction<number> = {
            type: actionTypes.INCREMENT,
            payload: 2,
        };

        reducer.increment(state, action);

        expect(state.value).toEqual(2);
    });
});