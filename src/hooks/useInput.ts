import { useState, ChangeEvent } from "react"
type InputValue = string | number

const useInput = (defaultValue?: InputValue) => {
    const [value, setValue] = useState<InputValue>(defaultValue ? defaultValue : "")
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
    return { value, onChange }
}
export default useInput;
