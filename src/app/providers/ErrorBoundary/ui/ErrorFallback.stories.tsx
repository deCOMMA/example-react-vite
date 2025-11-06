import type { Meta, StoryObj } from '@storybook/react-vite';
import { ErrorFallback } from './ErrorFallback';
import { ThemeDecorators } from '@/shared/config/storybook/decorators/ThemeDecorators';
const meta = {
    title: 'pages/ErrorFallback',
    component: ErrorFallback,
    tags: ['autodocs'],
} satisfies Meta<typeof ErrorFallback>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Normal: Story = {
    args: {
        error: new Error('Пример ошибки: ERROR'),
        resetErrorBoundary: () => console.log('Попытка восстановления...'),
    },
    decorators: [ThemeDecorators()],
};
export const Dark: Story = {
    args: {
        error: new Error('Пример ошибки: ERROR'),
        resetErrorBoundary: () => console.error('Попытка восстановления...'),
    },
    decorators: [ThemeDecorators({ theme: 'dark' })],
};