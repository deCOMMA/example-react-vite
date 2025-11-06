import type { Meta, StoryObj } from '@storybook/react-vite';
import { Loader } from './Loader';
import { StyleDecorators } from '@/shared/config/storybook/decorators/StyleDecorators';

const meta = {
    title: 'shared/Loader',
    component: Loader,
    tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
    decorators: [StyleDecorators()],
};
export const Dark: Story = {
    args: {},
    decorators: [StyleDecorators({ theme: 'dark' })]
};
