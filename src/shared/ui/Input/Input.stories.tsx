import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';
import { RouterDecorator } from '@/shared/config/storybook/decorators/RouterDecorators';

const meta = {
    decorators: [RouterDecorator()],
    title: 'shared/Input',
    component: Input,
    tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        placeholder: 'Введите username',
        value: 'username1234',
    },
};
