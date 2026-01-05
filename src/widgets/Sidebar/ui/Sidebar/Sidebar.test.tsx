import { fireEvent, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';
import { it } from 'vitest';
import { renderWithStore } from '@/shared/config/tests/renderWithStore';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    it('should render in Russian', () => {
        renderWithStore(<Sidebar />);
        screen.debug();
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    it('toggle btn', () => {
        renderWithStore(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass(/expand/);
    });
});
