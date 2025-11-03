import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { describe, expect, it } from 'vitest';

describe('button', () => {
    it('btn test to be in doc', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('btn test have class', () => {
        render(<Button theme='clear'>Click me</Button>);
        expect(screen.getByText('Click me')).toHaveClass(/clear/);
    });
});
