import { renderHook, act } from '@testing-library/react';
import { RecoilRoot, useRecoilValue, useRecoilState, useSetRecoilState, snapshot_UNSTABLE } from "recoil"
import { counterState } from "../counter/atoms"
import { counterSelector } from "../counter/selectors"

describe('counterAtom', () => {
    it('should update the value of counter atom', () => {
        const { result } = renderHook(() => useRecoilState(counterState), {
            wrapper: RecoilRoot,
        });
        const [value, setValue] = result.current;
        expect(value).toBe(0);
        act(() => {
            setValue(10);
        });
        expect(result.current[0]).toBe(10);
    });
});

describe('counterSelector', () => {
    it('should return the value of counterState', () => {
        const { result: atomResult } = renderHook(() => useSetRecoilState(counterState), {
            wrapper: RecoilRoot,
        });
        const { result: selectorResult } = renderHook(() => useRecoilValue(counterSelector), {
            wrapper: RecoilRoot,
        });
        const setValue = atomResult.current;
        expect(selectorResult.current).toBe(0);
        act(() => {
            setValue(10);
        });
        const { result: test } = renderHook(() => useRecoilValue(counterSelector), {
            wrapper: RecoilRoot,
        });
        expect(test.current).toBe(0);
    });
});


test('test counterAtom v2', () => {
    const { result } = renderHook(() => useRecoilState(counterState), {
        wrapper: RecoilRoot,
    });
    const [value, setValue] = result.current;
    expect(value).toBe(0);
    act(() => {
        setValue(10);
    });
    expect(result.current[0]).toBe(10);
});


test('test counterSelector v2', () => {
    const initialSnapshot = snapshot_UNSTABLE();
    expect(initialSnapshot.getLoadable(counterSelector).valueOrThrow()).toBe(0);
    const testSnapshot = snapshot_UNSTABLE(({ set }) => set(counterState, 1));
    expect(testSnapshot.getLoadable(counterSelector).valueOrThrow()).toBe(1);
});

