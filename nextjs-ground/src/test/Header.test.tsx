import { render, screen } from '@testing-library/react';

import Header from "@src/components/Header"


describe('<Header />', () => {
    it('renders a heading', () => {
        const { container } = render(<Header />);
        const todo = screen.getByText('todo');

        expect(todo).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });
});