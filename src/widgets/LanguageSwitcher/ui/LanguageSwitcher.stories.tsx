import type { Meta, StoryObj } from '@storybook/react-vite';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeDecorators } from '@/shared/config/storybook/decorators/ThemeDecorators';
const meta = {
    title: 'widgets/LanguageSwitcher',
    component: LanguageSwitcher,
    tags: ['autodocs'],
} satisfies Meta<typeof LanguageSwitcher>;

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
