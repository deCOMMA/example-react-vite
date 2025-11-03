import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';
import { it } from 'vitest';
import { Sidebar } from '@/widgets/Sidebar/index';

describe('Sidebar', () => {
    it('should render in Russian', () => {
        render(<Sidebar />);
        screen.debug();
        expect(screen.getByText('Свернуть')).toBeInTheDocument();
    });
    it('toggle btn', () => {
        render(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass(/expand/);
    });
});
