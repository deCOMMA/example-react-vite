import type { Meta, StoryObj } from '@storybook/react-vite';
import { Modal } from './Modal';
import { StyleDecorators } from '@/shared/config/storybook/decorators/StyleDecorators';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        isOpen: true,
        children: 'modal window',
    },
    decorators: [StyleDecorators()],
};
export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'modal window',
    },
    decorators: [StyleDecorators({ theme: 'dark' })],
};
