import type { Meta, StoryObj } from '@storybook/react-vite';
import { Sidebar } from './Sidebar';
import { ThemeDecorators } from '@/shared/config/storybook/decorators/ThemeDecorators';
const meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

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
