import { reducer, actionTypes, CounterState } from "@src/store/counter";
import { getInt } from "@src/mock/number";

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

    test("action.increment", () => {
        const action: ReduxAction<number> = {
            type: actionTypes.INCREMENT,
            payload: 2,
        };
        reducer.increment(state!, action);
        expect(state!.value).toEqual(2);
    });

    test("action.decrement", () => {
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
    it("action.incrementAsync fail", async () => {
        const action: ReduxAction<number> = {
            type: actionTypes.INCREMENTASYNC,
            payload: await getInt({ status: "reject" }),
        }
        reducer.incrementAsync(state!, action);
        expect(state!.value).toEqual(30);
    });
});

