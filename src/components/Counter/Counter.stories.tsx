import { ReactElement } from "react"
import { Provider } from 'react-redux';
import { configureStore, createReducer } from '@reduxjs/toolkit';
import { Meta, Story } from "@storybook/react";
import { expect } from '@storybook/jest';
import { within, userEvent } from '@storybook/testing-library';

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
    argTypes: {
        onIncrease: { action: true },
        onDecrease: { action: true },
        onIncreaseWithFetch: { action: true },
    },
} as Meta;

const Template: Story = (args) => <Counter {...args} />;

export const Default = Template.bind({});
Default.decorators = [
    (story) => <Mockstore state={initialState}>{story()}</Mockstore>,
];
Default.args = {};

Default.play = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const incrementButton = canvas.getByText("증가")
    const decrementButton = canvas.getByText("감소")
    const incrementAsyncButton = canvas.getByText("비동기 증가")
    await userEvent.click(incrementButton);
    await userEvent.click(decrementButton);
    await userEvent.click(incrementAsyncButton);
};

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