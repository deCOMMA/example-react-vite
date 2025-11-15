import type { Meta, StoryObj } from '@storybook/react-vite';
import { Navbar } from './Navbar';
import { RouterDecorator } from '@/shared/config/storybook/decorators/RouterDecorators';
const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

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
