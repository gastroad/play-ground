import { createSlice, createAction, createReducer } from '@reduxjs/toolkit'

import { ReduxAction } from "@src/types/redux"

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0,
}

const actionTypes = {
    INCREMENT: "COUNTER/INCREMENT",
};
const action = {
    incrementValue: createAction<number>(actionTypes.INCREMENT),
};

const reducer = {
    increment: (state: CounterState, action: ReduxAction<CounterState["value"]>) => {
        state.value += action.payload
    },
};

const counterReducer = createReducer(initialState, (builder) => {
    builder.addCase(action.incrementValue, reducer.increment);
});


export { CounterState, initialState, actionTypes, action, reducer }

export default counterReducer