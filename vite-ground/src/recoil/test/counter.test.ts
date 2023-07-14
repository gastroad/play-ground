import { renderHook } from '@testing-library/react';
import { RecoilRoot, useRecoilState, snapshot_UNSTABLE } from "recoil"
import { counterState } from "../counter/atoms"
import { counterSelector } from "../counter/selectors"


describe('recoil counter', () => {
    test('atom', () => {
        const { result } = renderHook(() => useRecoilState(counterState), {
            wrapper: RecoilRoot,
        });
        expect(result.current[0]).toBe(0);
    });

    test('selector', () => {
        const initialSnapshot = snapshot_UNSTABLE();
        expect(initialSnapshot.getLoadable(counterSelector).valueOrThrow()).toBe(0);
        const testSnapshot = snapshot_UNSTABLE(({ set }) => set(counterState, 1));
        expect(testSnapshot.getLoadable(counterSelector).valueOrThrow()).toBe(1);
    });
});

