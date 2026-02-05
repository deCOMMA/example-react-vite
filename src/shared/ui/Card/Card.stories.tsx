import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Card } from './Card';
import { StyleDecorators } from '@/shared/config/storybook/decorators/StyleDecorators';
import { Text } from '../Text/Text';

const meta = {
    decorators: [StyleDecorators()],
    title: 'shared/Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {},
    args: { onClick: fn() },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: <Text text='text' title='title' size='l' />
    },
};