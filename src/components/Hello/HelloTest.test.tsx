import { act, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

import Hello, { Props } from "./Hello"



describe("Hello", () => {
    const initialProps: Props = {
        name: "jimmy",
    };
    it("Render Hello", () => {
        render(<Hello />);

        expect(screen.getByText(`Hey, stranger`)).toBeInTheDocument();
    });
    it("Render Hello with props", () => {
        render(<Hello {...initialProps} />);

        expect(screen.getByText(`Hello, ${initialProps.name}!`)).toBeInTheDocument();
    });
});
