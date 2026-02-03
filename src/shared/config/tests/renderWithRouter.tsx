import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

export function renderWithRouter(component: React.ReactNode) {
    return render(<MemoryRouter initialEntries={['/']}>{component}</MemoryRouter>);
}
