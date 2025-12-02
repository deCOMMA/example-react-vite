import { describe, expect, it } from 'vitest';
import { Counter } from './Counter';
import { renderWithRouter } from '@/shared/config/tests/renderWithRouter';
import { fireEvent, screen } from '@testing-library/dom';

describe('Counter.test', () => {
    it('', () => {
        renderWithRouter(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
    it('', () => {
        renderWithRouter(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        fireEvent.click(screen.getByTestId('increment_btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
    it('', () => {
        renderWithRouter(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        fireEvent.click(screen.getByTestId('decrement_btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
