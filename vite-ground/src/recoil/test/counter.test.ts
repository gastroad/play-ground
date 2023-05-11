import { renderHook, act } from '@testing-library/react';
import { RecoilRoot, useRecoilValue, useRecoilState } from "recoil"
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
        const { result: atomResult } = renderHook(() => useRecoilState(counterState), {
            wrapper: RecoilRoot,
        });
        const { result: selectorResult } = renderHook(() => useRecoilValue(counterSelector), {
            wrapper: RecoilRoot,
        });
        const [value, setValue] = atomResult.current;

        expect(selectorResult.current).toBe(0);
        expect(value).toBe(0);

        act(() => {
            setValue(10);
            expect(selectorResult.current).toBe(10);
        });

        expect(atomResult.current[0]).toBe(10);
    });
});
