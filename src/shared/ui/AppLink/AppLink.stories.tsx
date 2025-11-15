import type { Meta, StoryObj } from '@storybook/react-vite';
import { AppLink } from './AppLink';
import { RouterDecorator } from '@/shared/config/storybook/decorators/RouterDecorators';

const meta = {
    decorators: [RouterDecorator()],
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        size: 'medium',
        children: 'Primary Link',
        to: '/',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        size: 'medium',
        children: 'Secondary Link',
        to: '/about',
    },
};

export const Large: Story = {
    args: {
        variant: 'primary',
        size: 'large',
        children: 'Large Link',
        to: '/',
    },
};

export const Medium: Story = {
    args: {
        variant: 'primary',
        size: 'medium',
        children: 'Medium Link',
        to: '/',
    },
};

export const Small: Story = {
    args: {
        variant: 'primary',
        size: 'small',
        children: 'Small Link',
        to: '/',
    },
};
