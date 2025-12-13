import type { Meta, StoryObj } from '@storybook/react-vite';
import { LoginModal } from './LoginModal';
import { ThemeDecorators } from '@/shared/config/storybook/decorators/ThemeDecorators';
import { RouterDecorator } from '@/shared/config/storybook/decorators/RouterDecorators';
const meta = {
    title: 'features/LoginModal',
    component: LoginModal,
    tags: ['autodocs'],
} satisfies Meta<typeof LoginModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: { isOpen: true, onClose: () => null },
    decorators: [RouterDecorator()],
};
export const Dark: Story = {
    args: { isOpen: true, onClose: () => null },
    decorators: [RouterDecorator({ theme: 'dark' })],
};
