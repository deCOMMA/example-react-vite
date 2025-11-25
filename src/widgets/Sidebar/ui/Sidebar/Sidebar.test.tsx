import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';
import { it } from 'vitest';
import { Sidebar } from '@/widgets/Sidebar/index';
import { renderWithRouter } from '@/shared/config/tests/renderWithRouter';

describe('Sidebar', () => {
    it('should render in Russian', () => {
        renderWithRouter(<Sidebar />);
        screen.debug();
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    it('toggle btn', () => {
        renderWithRouter(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass(/expand/);
    });
});
