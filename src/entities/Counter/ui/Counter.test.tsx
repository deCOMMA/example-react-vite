import { describe, expect, it } from 'vitest';
import { Counter } from './Counter';
import { renderWithStore } from '@/shared/config/tests/renderWithStore';
import { fireEvent, screen } from '@testing-library/dom';

describe('Counter.test', () => {
    it('', () => {
        renderWithStore(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
    it('', () => {
        renderWithStore(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        fireEvent.click(screen.getByTestId('increment_btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
    it('', () => {
        renderWithStore(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        fireEvent.click(screen.getByTestId('decrement_btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
