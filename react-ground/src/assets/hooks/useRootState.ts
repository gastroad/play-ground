import { useSelector } from "react-redux";
import { RootState } from "src/store/store";
type StateSelector<T> = (state: RootState) => T;

export function useRootState<T>(selector: StateSelector<T>,) {
    return useSelector(selector);
}

