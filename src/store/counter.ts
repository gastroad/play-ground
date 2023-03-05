import { createAction, createReducer, createAsyncThunk } from '@reduxjs/toolkit'
import { getInt } from "@src/mock/number"

import { ReduxAction } from "@src/types/redux"

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0,
}

const actionTypes = {
    INCREMENT: "COUNTER/INCREMENT",
    DECREMENT: "COUNTER/DECREMENT",
    INCREMENTASYNC: "COUNTER/INCREMENTASYNC"
};
const action = {
    incrementValue: createAction<number>(actionTypes.INCREMENT),
    decrementValue: createAction<number>(actionTypes.DECREMENT),
    increaseWithFetch: createAsyncThunk<number>(actionTypes.INCREMENTASYNC, async () => await getInt())
};

const reducer = {
    increment: (state: CounterState, action: ReduxAction<CounterState["value"]>) => {
        state.value += action.payload
    },
    decrement: (state: CounterState, action: ReduxAction<CounterState["value"]>) => {
        state.value -= action.payload
    },
    incrementAsync: (state: CounterState, action: ReduxAction<CounterState["value"]>) => {
        state.value += action.payload
    },
};

const counterReducer = createReducer(initialState, (builder) => {
    builder.addCase(action.incrementValue, reducer.increment);
    builder.addCase(action.decrementValue, reducer.decrement);
    builder.addCase(action.increaseWithFetch.fulfilled, reducer.incrementAsync);
});


export { CounterState, initialState, actionTypes, action, reducer }

export default counterReducer