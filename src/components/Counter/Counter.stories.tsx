import { ReactElement } from "react"
import { Provider } from 'react-redux';
import { configureStore, createReducer } from '@reduxjs/toolkit';
import { Meta, Story } from "@storybook/react";

import { reducer, CounterState, initialState, action } from "@src/store/counter";
import Counter from "./Counter"


interface MockStoreProps {
    state: CounterState
    children: ReactElement
}

const Mockstore = ({ state, children }: MockStoreProps) => {
    return (
        <Provider store={
            configureStore({
                reducer: {
                    counter: createReducer(state, (builder) => {
                        builder.addCase(action.incrementValue, reducer.increment);
                        builder.addCase(action.decrementValue, reducer.decrement);
                        builder.addCase(action.increaseWithFetch.fulfilled, reducer.incrementAsync);
                        builder.addCase(action.increaseWithFetch.rejected, () => {
                            console.log("rejected")
                        });
                        builder.addCase(action.increaseWithFetch.pending, () => {
                            console.log("pending")
                        });
                    })
                }
            })}>
            {children}
        </Provider >
    )
}

export default {
    component: Counter,
    title: 'Counter',
} as Meta;

const Template: Story = () => <Counter />;

export const Default = Template.bind({});
Default.decorators = [
    (story) => <Mockstore state={initialState}>{story()}</Mockstore>,
];

export const CounterWithValue = Template.bind({});
CounterWithValue.decorators = [
    (story) => {
        return (
            <Mockstore
                state={{
                    ...initialState,
                    value: 100
                }}
            >
                {story()}
            </Mockstore>
        );
    },
];