import { render, screen } from '@testing-library/react'
import { Button } from './Button'
import { describe, expect, it } from 'vitest'

describe('button', () => {

    it('renders children correctly', () => {
        render(<Button>Click me</Button>)
        expect(screen.getByText('Click me')).toBeInTheDocument()
    })
})