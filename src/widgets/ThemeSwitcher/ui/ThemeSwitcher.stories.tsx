import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeDecorators } from '@/shared/config/storybook/decorators/ThemeDecorators';
const meta = {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
    tags: ['autodocs'],
} satisfies Meta<typeof ThemeSwitcher>;

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