import type { Meta, StoryObj } from '@storybook/react-vite';
import AboutPage from './AboutPage';
import { ThemeDecorators } from '@/shared/config/storybook/decorators/ThemeDecorators';
const meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
    tags: ['autodocs'],
} satisfies Meta<typeof AboutPage>;

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
