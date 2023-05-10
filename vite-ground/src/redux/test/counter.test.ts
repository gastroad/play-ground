import counterReducer, { increment, decrement, incrementByAmount, CounterState } from "../store/counter/counterSlice"


describe('counter reducer', () => {
    const initialState: CounterState = {
        value: 0,
    }

    it('should handle initial state', () => {
        expect(counterReducer(undefined, { type: 'unknown' })).toEqual(initialState)
    })

    it('should handle increment', () => {
        const actual = counterReducer(initialState, increment())
        expect(actual.value).toEqual(1)
    })

    it('should handle decrement', () => {
        const actual = counterReducer(initialState, decrement())
        expect(actual.value).toEqual(-1)
    })

    it('should handle incrementByAmount', () => {
        const actual = counterReducer(initialState, incrementByAmount(2))
        expect(actual.value).toEqual(2)
    })
})
