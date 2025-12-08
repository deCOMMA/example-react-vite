import type { Meta, StoryObj } from '@storybook/react-vite';
import { LoginForm } from './LoginForm';
import { ThemeDecorators } from '@/shared/config/storybook/decorators/ThemeDecorators';
const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
    decorators: [ThemeDecorators()],
};
export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorators({ theme: 'dark' })],
};
