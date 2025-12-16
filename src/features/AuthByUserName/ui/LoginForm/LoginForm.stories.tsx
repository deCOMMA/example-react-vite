import type { Meta, StoryObj } from '@storybook/react-vite';
import LoginForm from './LoginForm';
import { RouterDecorator } from '@/shared/config/storybook/decorators/RouterDecorators';
const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
    decorators: [RouterDecorator()],
};
export const Dark: Story = {
    args: {},
    decorators: [RouterDecorator({ theme: 'dark' })],
};
